// Simple MongoDB connection test
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Lee:admin@seminar.mcunain.mongodb.net/?retryWrites=true&w=majority&appName=Seminar";

async function testConnection() {
  console.log('🔄 Testing MongoDB connection...');
  
  const client = new MongoClient(uri, {
    ssl: true,
    tls: true,
    serverSelectionTimeoutMS: 5000,
  });

  try {
    await client.connect();
    console.log('✅ Connected successfully to MongoDB');
    
    const db = client.db('teachers_seminar');
    const result = await db.admin().ping();
    console.log('✅ Database ping successful:', result);
    
    const collections = await db.listCollections().toArray();
    console.log('📋 Collections:', collections.map(c => c.name));
    
  } catch (error) {
    console.error('❌ Connection failed:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('authentication failed')) {
        console.log('🔐 Authentication issue - check username/password');
      } else if (error.message.includes('SSL')) {
        console.log('🔒 SSL/TLS issue - check connection settings');
      } else if (error.message.includes('ENOTFOUND')) {
        console.log('🌐 DNS issue - check cluster URL');
      }
    }
  } finally {
    await client.close();
  }
}

testConnection();
