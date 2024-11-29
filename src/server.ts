import config from "config";
import app from "./app";
import logger from "./config/logger";
import connectDB from "./config/db";

const startServer = async () => {
    const PORT: number = config.get("server.port");
    try {
        await connectDB();
        logger.info("Database connected successfully")
        app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);
            logger.on("finish", () => {
                process.exit(1);
            });
        }
    }
};

void startServer();
