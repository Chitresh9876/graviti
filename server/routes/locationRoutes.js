import express from "express";
import { trackLocation } from "../controllers/locationController.js";
import { verifyToken } from "../utils/jwtUtils.js";

const router = express.Router();

router.post("/track", verifyToken, trackLocation);

export default router;
