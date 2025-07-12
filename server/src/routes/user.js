import express from "express";
import { searchBySkill } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Skill search route
router.get("/search", verifyToken, searchBySkill);

export default router;
