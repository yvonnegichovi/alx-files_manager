import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const HOST = process.env.DB_HOST || 'localhost';
    const PORT = process.env.DB_PORT || '27017';
    const DB = process.env.DB_DATABASE || 'files_manager';
    const URI = `mongodb://${HOST}:${PORT}`;
    thi.mongoClient = new MongoClient(URI, { useUnifiedTopology: true });
    this.mongoClient.connect((error) => {
      if (!error) this.db = this.mongoClient.db(DATABASE);
    });
  }
