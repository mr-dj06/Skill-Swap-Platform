import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      isAdmin: req.body.isAdmin || "user", // default value if not passed

      location: req.body.location || "",
      profileImage: req.body.profileImage || "",
      skillsOffered: req.body.skillsOffered || [],
      skillsWanted: req.body.skillsWanted || [],
      availability: req.body.availability || "",
      isPublic: req.body.isPublic !== undefined ? req.body.isPublic : true,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    next(error);
  }
};

// export const login = async (req, res, next) => {
//   try {
//     //checks username
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return next(createError(404, "User not found"));

//     //checks password
//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect) return next(createError(400, "wrong password!"));

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET
//     );

//     //destructure
//     const { password, ...others } = user._doc;
//     res
//       .cookie("access_token", token, { httpOnly: true })
//       .status(200)
//       .json({ ...others, isAdmin: user.isAdmin });

//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ ...otherDetails });
//     console.log(`Welcome ${user.username}`);
//   } catch (error) {
//     next(error);
//   }
// };

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...others, isAdmin: user.isAdmin, token });

    console.log(`Welcome ${user.name}`);
  } catch (error) {
    next(error);
  }
};
