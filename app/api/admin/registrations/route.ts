import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { sendApprovalEmail } from '@/lib/email';

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

export async function POST(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { action, registrationIds, registrationId } = await request.json();
    const { db } = await connectToDatabase();

    if (action === 'approve') {
      // Approve registration(s) and send confirmation email
      const ids = registrationIds || [registrationId];
      
      for (const id of ids) {
        // Update registration status
        await db.collection('registrations').updateOne(
          { _id: new ObjectId(id) },
          { 
            $set: { 
              status: 'approved', 
              approvedAt: new Date(),
              approvedBy: 'admin'
            } 
          }
        );

        // Get registration details for email
        const registration = await db.collection('registrations').findOne({ _id: new ObjectId(id) });
        
        if (registration) {
          // Send approval email
          console.log('📧 Sending approval email...');
          try {
            await sendApprovalEmail(registration);
            console.log('✅ Approval email sent successfully');
          } catch (emailError) {
            console.error('❌ Failed to send approval email:', emailError);
            // Don't fail the approval if email fails
          }
        }
      }

      return NextResponse.json({ 
        success: true, 
        message: `${ids.length} registration(s) approved and confirmation emails sent` 
      });
    }

    if (action === 'reject') {
      // Reject registration(s)
      const ids = registrationIds || [registrationId];
      
      for (const id of ids) {
        // Update registration status
        await db.collection('registrations').updateOne(
          { _id: new ObjectId(id) },
          { 
            $set: { 
              status: 'rejected', 
              rejectedAt: new Date(),
              rejectedBy: 'admin'
            } 
          }
        );
      }

      return NextResponse.json({ 
        success: true, 
        message: `${ids.length} registration(s) rejected` 
      });
    }

    if (action === 'delete') {
      // Delete registration(s)
      const ids = registrationIds || [registrationId];
      
      const result = await db.collection('registrations').deleteMany({
        _id: { $in: ids.map(id => new ObjectId(id)) }
      });

      return NextResponse.json({ 
        success: true, 
        message: `${result.deletedCount} registration(s) deleted` 
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Registration action error:', error);
    return NextResponse.json(
      { error: 'Operation failed' },
      { status: 500 }
    );
  }
}
