import User from "../models/user.model.js";

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
