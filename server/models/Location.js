import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
  coordinates: { type: [Number], required: true }, // [longitude, latitude]
});

const Location = mongoose.model("Location", LocationSchema);
export default Location;
