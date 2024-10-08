import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//connectDB is async-await and hence it returns a promise
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MONGODB connected ;) \n DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED:  \n", error);
    process.exit(1);
  }
};

export default connectDB;
