import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => {
      console.error('Redis client error:', err);
    });
    this.client.connect().catch((err) => {
      console.error('Redis client connection error:' err);
    });
  }

