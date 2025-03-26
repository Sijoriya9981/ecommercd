import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

if (!process.env.mongo_URI) {
    throw new Error(
        "Please provide mongo_URI in the .env file"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.mongo_URI)
        console.log("Connection with DB Successfull")
    }
    catch (error) {
        console.log("Mongo connect error", error)
        process.exit(1)
    }
}

export default connectDB;