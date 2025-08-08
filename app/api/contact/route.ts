import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Create new contact message
    const contact = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      status: 'new',
      createdAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    };

    const result = await db.collection('contacts').insertOne(contact);

    return NextResponse.json({ 
      message: 'Thank you for your message. We will get back to you soon!', 
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    return NextResponse.json({ 
      error: 'Failed to send message. Please try again later.' 
    }, { status: 500 });
  }
}
