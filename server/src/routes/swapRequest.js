import express from "express";
import {
  createSwapRequest,
  getSentSwaps,
  getReceivedSwaps,
  updateSwapStatus,
  cancelSwap,
} from "../controllers/swapRequest.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createSwapRequest);
router.get("/sent", verifyToken, getSentSwaps);
router.get("/received", verifyToken, getReceivedSwaps);
router.patch("/:id/status", verifyToken, updateSwapStatus);
router.delete("/:id", verifyToken, cancelSwap);

export default router;
