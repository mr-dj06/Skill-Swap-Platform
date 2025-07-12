import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

//dbConnect
import dbConnect from "./src/db/dbConnect.js";

//routes
import auth from "./src/routes/auth.js";
import user from "./src/routes/user.js";
import swapRequest from "./src/routes/swapRequest.js";

dotenv.config();
const app = express();

dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port:${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });

mongoose.connection.on("disconnected", () => {
  console.log("DB is disconnected!");
});

app.get("/", (req, res) => {
  res.send("DEFAULT SERVER ENDPOINT");
});

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // your React app origin
    credentials: true, // allow cookies to be sent
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/swaps", swapRequest);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Error from errorHandler middleware";
  return res.status(500).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});
