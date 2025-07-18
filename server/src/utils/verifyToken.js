import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// Check if token exists & is valid
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.user = user; // attach user to request
    next();
  });
};

// Check if current user is owner or admin
export const verifyUser = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin === "admin") {
    next();
  } else {
    return next(createError(403, "You are not authorized"));
  }
};

// Check if current user is admin only
export const verifyAdmin = (req, res, next) => {
  if (req.user.isAdmin === "admin") {
    next();
  } else {
    return next(createError(403, "You are not authorized"));
  }
};
