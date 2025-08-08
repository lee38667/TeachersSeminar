import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '@/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';

function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Unauthorized');
  }

  const token = authHeader.substring(7);
  return jwt.verify(token, JWT_SECRET);
}

export async function GET(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { db } = await connectToDatabase();
    
    // Get all registrations with filtering support
    const registrations = await db.collection('registrations')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(registrations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}
