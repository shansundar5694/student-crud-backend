import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDbConnectString = process.env.MONGODBCONNECTIONSTRING;

const connectDB = async () => {
  try {
    console.log(mongoDbConnectString);
    const connection = await mongoose.connect(mongoDbConnectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
