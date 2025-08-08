import { MongoClient, Db } from 'mongodb';

const uri = process.env.DATABASE_URL;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env file as DATABASE_URL');
}

const options = {
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: false,
  retryWrites: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  try {
    const client = await clientPromise;
    const db = client.db('seminar');
    
    // Test the connection
    await db.admin().ping();
    console.log('Successfully connected to MongoDB');
    
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error(`Failed to connect to database: ${error}`);
  }
}

export default clientPromise;
