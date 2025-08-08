// Test script to verify MongoDB connection
import { connectToDatabase } from '../lib/mongodb';

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    console.log('Database URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    
    const { db, client } = await connectToDatabase();
    console.log('✅ Successfully connected to MongoDB');
    
    // Test database operations
    const collections = await db.listCollections().toArray();
    console.log('📋 Available collections:', collections.map(c => c.name));
    
    // Test inserting a document
    const testResult = await db.collection('test').insertOne({ 
      test: true, 
      timestamp: new Date() 
    });
    console.log('✅ Test insert successful:', testResult.insertedId);
    
    // Clean up test document
    await db.collection('test').deleteOne({ _id: testResult.insertedId });
    console.log('🧹 Test document cleaned up');
    
    await client.close();
    console.log('✅ Connection test completed successfully');
    
  } catch (error) {
    console.error('❌ MongoDB connection test failed:');
    console.error('Error details:', error);
    
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // Provide troubleshooting suggestions
    console.log('\n🔧 Troubleshooting suggestions:');
    console.log('1. Check if your MongoDB Atlas cluster is running');
    console.log('2. Verify your database password is correct');
    console.log('3. Ensure your IP address is whitelisted in MongoDB Atlas');
    console.log('4. Check if the database name exists');
    console.log('5. Verify the connection string format');
  }
}

testConnection();
