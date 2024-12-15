import User from "../models/User.js";
import Location from "../models/Location.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLocationLogs = async (req, res) => {
  try {
    const { userId } = req.params;
    const logs = await Location.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
