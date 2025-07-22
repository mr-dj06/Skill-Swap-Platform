import express from "express";
import {
  getUserById,
  getAllUsers,
  searchBySkill,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/search", searchBySkill);

export default router;
