import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
const MONGODB_URL = process.env.MONGODB_URL

const connectDB = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://bhaalu:bhaalupass@youtubeclone.j5y8a.mongodb.net/${DB_NAME}`);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message , error.code}`);
        process.exit(1);
    }
}

export default connectDB;