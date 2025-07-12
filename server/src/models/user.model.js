import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, default: "" }, // Optional
    profileImage: { type: String, default: "" }, // Optional (URL)
    skillsOffered: [{ type: String }], // Example: ["React", "Cooking"]
    skillsWanted: [{ type: String }],
    availability: { type: String, default: "" }, // Example: "Evenings", "Weekends"
    isPublic: { type: Boolean, default: true }, // Toggle profile visibility
    isAdmin: { type: String, enum: ["user", "admin"], default: "user" },
    banned: { type: Boolean, default: false }, // For admin moderation
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
