import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${process.env.DB_NAME}`
    );
    console.log(
      `\nMongoDB connected !!\nDB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed due to =>", error);
    process.exit(1);
  }
};

export default dbConnect;
