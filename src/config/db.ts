import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectDB = async () => {
    try {
        const mongoURI: string = config.get("database.url");
        await mongoose.connect(mongoURI);
    } catch (error) {
        if (error instanceof Error) {
            logger.error("MongoDB connection error: " + error.message);
            process.exit(1);
        }
    }
};

export default connectDB;
