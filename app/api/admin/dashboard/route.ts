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
    
    // Get dashboard statistics
    const totalRegistrations = await db.collection('registrations').countDocuments();
    const attendees = await db.collection('registrations').countDocuments({ participationType: 'attendee' });
    const presenters = await db.collection('registrations').countDocuments({ participationType: 'presenter' });
    const contactMessages = await db.collection('contacts').countDocuments();
    
    // Get new submissions from last 7 days
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const newSubmissions = await db.collection('registrations').countDocuments({
      createdAt: { $gte: lastWeek }
    });

    // Get recent registrations
    const recentRegistrations = await db.collection('registrations')
      .find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();

    const stats = {
      totalRegistrations,
      attendees,
      presenters,
      newSubmissions,
      resourceSubmissions: 0, // TODO: Implement resource submissions collection
      contactMessages,
    };

    return NextResponse.json({
      stats,
      recentRegistrations,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}
