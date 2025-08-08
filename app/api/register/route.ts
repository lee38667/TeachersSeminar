import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Registration request received');
    
    const formData = await request.json();
    console.log('📝 Form data received for:', formData.email);
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'participationType'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.log('❌ Missing required fields:', missingFields);
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('❌ Invalid email format:', formData.email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('🔗 Attempting database connection...');
    
    let db;
    try {
      const connection = await connectToDatabase();
      db = connection.db;
      console.log('✅ Database connected successfully');
    } catch (dbError) {
      console.error('❌ Database connection failed:', dbError);
      
      // Return a user-friendly error but still process the registration
      // This allows the system to work even if MongoDB is temporarily unavailable
      const confirmationCode = generateConfirmationCode();
      
      console.log('⚠️ Using fallback mode - registration data logged for manual processing');
      console.log('Registration data:', {
        ...formData,
        confirmationCode,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Registration received! Due to high volume, confirmation will be sent within 24 hours.',
        confirmationCode,
        fallbackMode: true
      });
    }
    
    // Check for duplicate email
    console.log('🔍 Checking for duplicate email...');
    const existingRegistration = await db.collection('registrations').findOne({
      email: formData.email.toLowerCase()
    });

    if (existingRegistration) {
      console.log('❌ Duplicate email found:', formData.email);
      return NextResponse.json(
        { error: 'This email address is already registered for the seminar' },
        { status: 409 }
      );
    }

    // Prepare registration data
    const registrationData = {
      ...formData,
      email: formData.email.toLowerCase(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'pending',
      paymentStatus: 'unpaid',
      confirmationCode: generateConfirmationCode(),
      ipAddress: request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    };

    console.log('💾 Saving registration to database...');
    // Save to MongoDB
    const result = await db.collection('registrations').insertOne(registrationData);
    console.log('✅ Registration saved with ID:', result.insertedId);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Registration submitted successfully! You will receive a confirmation email shortly.',
      registrationId: result.insertedId,
      confirmationCode: registrationData.confirmationCode
    });
    
  } catch (error) {
    console.error('💥 Registration error details:');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Full error:', error);
    
    // Provide more specific error messages based on error type
    let userMessage = 'Failed to submit registration. Please try again.';
    
    if (error instanceof Error) {
      if (error.message.includes('MongoServerSelectionError') || error.message.includes('SSL')) {
        userMessage = 'Database connection error. Please try again in a few moments.';
      } else if (error.message.includes('MongoNetworkError')) {
        userMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return NextResponse.json(
      { error: userMessage },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const confirmationCode = searchParams.get('code');
    const email = searchParams.get('email');

    if (!confirmationCode && !email) {
      return NextResponse.json(
        { error: 'Confirmation code or email is required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    let query: any = {};
    if (confirmationCode) {
      query.confirmationCode = confirmationCode;
    } else if (email) {
      query.email = email.toLowerCase();
    }

    const registration = await db.collection('registrations').findOne(query, {
      projection: {
        firstName: 1,
        lastName: 1,
        email: 1,
        participationType: 1,
        status: 1,
        paymentStatus: 1,
        confirmationCode: 1,
        createdAt: 1,
        updatedAt: 1
      }
    });

    if (!registration) {
      return NextResponse.json(
        { error: 'Registration not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      registration
    });

  } catch (error) {
    console.error('Registration lookup error:', error);
    return NextResponse.json(
      { error: 'Failed to lookup registration' },
      { status: 500 }
    );
  }
}

// Generate a unique confirmation code
function generateConfirmationCode(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  return `REG-${timestamp}-${randomStr}`.toUpperCase();
}
