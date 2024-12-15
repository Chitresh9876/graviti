import Location from "../models/Location.js";
import redisClient from "../config/redis.js";

export const trackLocation = async (req, res) => {
  try {
    const { coordinates } = req.body;
    const location = await Location.create({
      userId: req.user.id,
      coordinates,
    });

    await redisClient.set(req.user.id, JSON.stringify(location));
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
