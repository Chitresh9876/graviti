import redis from 'redis';

const client = redis.createClient({
  url: process.env.REDIS_URI,
});

client.on("error", (err) => console.error("Redis error:", err));

// client.connect();

export default client;
