import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middlewares/globalErrorHandler";

const app = express();
app.use(express.json());

//* just for testing
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "hello from catalog service",
    });
});

//* imports for routers
import categoryRouter from "../src/modules/category/category.route";
app.use("/categories", categoryRouter);

//* Global error handler
app.use(globalErrorHandler);

export default app;
