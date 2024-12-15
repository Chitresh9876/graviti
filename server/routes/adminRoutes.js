import express from "express";
import { getUsers, getLocationLogs } from "../controllers/adminController.js";
import { verifyToken } from "../utils/jwtUtils.js";
import { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", verifyToken, isAdmin, getUsers);
router.get("/logs/:userId", verifyToken, isAdmin, getLocationLogs);

export default router;
