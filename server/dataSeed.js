import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./src/models/user.model.js"; // adjust path if needed

dotenv.config(); // Loads MONGO_URL from .env

const users = [
  {
    name: "Alice React",
    email: "alice@example.com",
    password: "123456",
    location: "Mumbai",
    profileImage: "https://i.pravatar.cc/150?img=1",
    skillsOffered: ["React", "JavaScript"],
    skillsWanted: ["Figma", "UI/UX"],
    availability: "Evenings",
    isPublic: true,
    isAdmin: "user",
  },
  {
    name: "Bob Python",
    email: "bob@example.com",
    password: "123456",
    location: "Delhi",
    profileImage: "https://i.pravatar.cc/150?img=2",
    skillsOffered: ["Python", "Data Analysis"],
    skillsWanted: ["Excel", "Power BI"],
    availability: "Weekends",
    isPublic: true,
    isAdmin: "user",
  },
  {
    name: "Chloe Writer",
    email: "chloe@example.com",
    password: "123456",
    location: "Ahmedabad",
    profileImage: "https://i.pravatar.cc/150?img=3",
    skillsOffered: ["Content Writing", "SEO"],
    skillsWanted: ["Web Development"],
    availability: "Weekdays",
    isPublic: true,
    isAdmin: "user",
  },
  {
    name: "David Excel",
    email: "david@example.com",
    password: "123456",
    location: "Bangalore",
    profileImage: "https://i.pravatar.cc/150?img=4",
    skillsOffered: ["Excel", "Power BI"],
    skillsWanted: ["MongoDB", "Express"],
    availability: "Weekends",
    isPublic: true,
    isAdmin: "user",
  },
  {
    name: "Admin",
    email: "admin@example.com",
    password: "admin123",
    location: "Remote",
    profileImage: "https://i.pravatar.cc/150?img=5",
    skillsOffered: ["Moderation"],
    skillsWanted: [],
    availability: "24x7",
    isPublic: true,
    isAdmin: "admin",
  },
];

const seedUsers = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI+process.env.DB_NAME);
    console.log("🟢 Connected to MongoDB");

    // await User.deleteMany(); // Clear existing users

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(hashedUsers);

    console.log("✅ Sample users seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding users:", err);
    process.exit(1);
  }
};

seedUsers();
