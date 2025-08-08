import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// Fallback in-memory storage for development (temporary)
let registrations: any[] = [];

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Registration request received (fallback mode)');
    
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

    // Try MongoDB connection first
    let useFallback = false;
    try {
      console.log('🔗 Attempting MongoDB connection...');
      const { db } = await connectToDatabase();
      console.log('✅ MongoDB connected successfully');
      
      // Check for duplicate email
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

      console.log('💾 Saving registration to MongoDB...');
      const result = await db.collection('registrations').insertOne(registrationData);
      console.log('✅ Registration saved with ID:', result.insertedId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Registration submitted successfully! You will receive a confirmation email shortly.',
        registrationId: result.insertedId,
        confirmationCode: registrationData.confirmationCode
      });

    } catch (dbError) {
      console.warn('⚠️ MongoDB connection failed, using fallback storage:', dbError);
      useFallback = true;
    }

    // Fallback to in-memory storage if MongoDB fails
    if (useFallback) {
      console.log('🔄 Using fallback storage mode');
      
      // Check for duplicate email in fallback storage
      const existingRegistration = registrations.find(reg => 
        reg.email.toLowerCase() === formData.email.toLowerCase()
      );

      if (existingRegistration) {
        console.log('❌ Duplicate email found in fallback:', formData.email);
        return NextResponse.json(
          { error: 'This email address is already registered for the seminar' },
          { status: 409 }
        );
      }

      // Prepare registration data for fallback
      const registrationData = {
        id: Date.now().toString(),
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

      // Store in fallback array
      registrations.push(registrationData);
      console.log('✅ Registration saved to fallback storage. Total registrations:', registrations.length);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Registration submitted successfully! (Saved locally - please configure MongoDB for production)',
        registrationId: registrationData.id,
        confirmationCode: registrationData.confirmationCode,
        fallbackMode: true
      });
    }
    
  } catch (error) {
    console.error('💥 Registration error details:');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Full error:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit registration. Please try again.' },
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

    // Try MongoDB first
    try {
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

    } catch (dbError) {
      console.warn('⚠️ MongoDB lookup failed, checking fallback storage');
      
      // Check fallback storage
      let registration;
      if (confirmationCode) {
        registration = registrations.find(reg => reg.confirmationCode === confirmationCode);
      } else if (email) {
        registration = registrations.find(reg => reg.email.toLowerCase() === email.toLowerCase());
      }

      if (!registration) {
        return NextResponse.json(
          { error: 'Registration not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        registration: {
          firstName: registration.firstName,
          lastName: registration.lastName,
          email: registration.email,
          participationType: registration.participationType,
          status: registration.status,
          paymentStatus: registration.paymentStatus,
          confirmationCode: registration.confirmationCode,
          createdAt: registration.createdAt,
          updatedAt: registration.updatedAt
        },
        fallbackMode: true
      });
    }

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
