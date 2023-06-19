const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'library';

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to the database');
    return client;
  } catch (err) {
    console.log('Error connecting to the database:', err);
  }
}

