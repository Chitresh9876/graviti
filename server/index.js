import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./config/db.js";
import redisClient from './config/redis.js';
import authRoutes from './routes/authRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load environment variables
dotenv.config();

// Connect to databases
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/admin", adminRoutes);

// Test Redis connection
// redisClient.on("ready", () => {
//   console.log("Redis Connected...");
// });

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
