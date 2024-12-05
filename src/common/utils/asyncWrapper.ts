import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";

export const asyncWrapper = (requestHandler: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => {
            if (error instanceof Error) {
                return next(createHttpError(500, error.message));
            }

            return next(createHttpError(500, "Internal server error"));
        });
    };
};
