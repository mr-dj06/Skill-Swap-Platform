import User from "../models/user.model.js";

// GET /api/user/:id
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password -__v");
    if (!user || !user.isPublic) {
      return res.status(404).json({ message: "User not found or not public" });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// GET all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ isPublic: true }).select("-password -__v");
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// GET /api/users/search?skill=react
export const searchBySkill = async (req, res, next) => {
  try {
    const { skill, location } = req.query;

    if (!skill) {
      return res.status(400).json({ message: "Skill is required in query" });
    }

    const skillRegex = new RegExp(skill, "i"); // case-insensitive match

    const query = {
      isPublic: true,
      $or: [
        { skillsOffered: { $regex: skillRegex } },
        { skillsWanted: { $regex: skillRegex } },
      ],
    };

    if (location) {
      const locationRegex = new RegExp(location, "i");
      query.location = { $regex: locationRegex };
    }

    const users = await User.find(query).select("-password -__v");
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
