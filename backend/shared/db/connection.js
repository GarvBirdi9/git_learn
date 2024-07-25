import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const createConnection = async () => {
  try {
    const connection_info = await mongoose.connect(`${process.env.DB_URL}`);
    return connection_info;
    console.log("connection ok");
  } catch (err) {
    throw err;
    console.log("connection failed");
  }
};

export default createConnection;
// createConnection();
