
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const dbConfig = async () => {
  try {
    // MongoDB connection string from environment variables
    const uri = process.env.MONGODB_URI;

    // Log the URI for debugging (avoid logging in production)
    console.log('Connecting to MongoDB with URI:', uri);

    // Connect to MongoDB with additional options for stability
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    // Detailed error message
    console.error('MongoDB connection error:', error.message);
    console.error('Stack Trace:', error.stack);
    
    // Exit process with failure code
    process.exit(1);
  }
};

export default dbConfig;