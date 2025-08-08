import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '@/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify JWT token
    jwt.verify(token, JWT_SECRET);

    const { db } = await connectToDatabase();
    
    // Fetch all contact messages
    const contacts = await db
      .collection('contacts')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Create new contact message
    const contact = {
      name,
      email,
      subject,
      message,
      status: 'new',
      createdAt: new Date(),
    };

    const result = await db.collection('contacts').insertOne(contact);

    return NextResponse.json({ 
      message: 'Contact message sent successfully', 
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
