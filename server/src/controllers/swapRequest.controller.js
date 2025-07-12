import SwapRequest from "../models/swapRequest.model.js";
import User from "../models/user.model.js";

// Create new request
export const createSwapRequest = async (req, res, next) => {
  try {
    const { receiverId, offeredSkill, requestedSkill } = req.body;

    if (!receiverId || !offeredSkill || !requestedSkill) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const receiver = await User.findById(receiverId);
    if (!receiver || receiver.banned) {
      return res.status(404).json({ message: "Receiver not found or banned" });
    }

    const newRequest = await SwapRequest.create({
      sender: req.user.id,
      receiver: receiverId,
      offeredSkill,
      requestedSkill,
    });

    res.status(201).json({ message: "Swap request sent", request: newRequest });
  } catch (err) {
    next(err);
  }
};

// Get all sent requests
export const getSentSwaps = async (req, res, next) => {
  try {
    const swaps = await SwapRequest.find({ sender: req.user.id }).populate(
      "receiver",
      "name email"
    );
    res.json(swaps);
  } catch (err) {
    next(err);
  }
};

// Get all received requests
export const getReceivedSwaps = async (req, res, next) => {
  try {
    const swaps = await SwapRequest.find({ receiver: req.user.id }).populate(
      "sender",
      "name email"
    );
    res.json(swaps);
  } catch (err) {
    next(err);
  }
};

// Accept/Reject a request
export const updateSwapStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const swap = await SwapRequest.findById(id);
    if (!swap) return res.status(404).json({ message: "Swap not found" });

    if (swap.receiver.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this swap" });
    }

    swap.status = status;
    await swap.save();

    res.json({ message: `Swap ${status}`, swap });
  } catch (err) {
    next(err);
  }
};

// Cancel a request (by sender only)
export const cancelSwap = async (req, res, next) => {
  try {
    const { id } = req.params;
    const swap = await SwapRequest.findById(id);

    if (!swap) return res.status(404).json({ message: "Swap not found" });

    if (swap.sender.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this swap" });
    }

    if (swap.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Only pending swaps can be cancelled" });
    }

    swap.status = "cancelled";
    await swap.save();

    res.json({ message: "Swap cancelled", swap });
  } catch (err) {
    next(err);
  }
};
