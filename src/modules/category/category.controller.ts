import { Request, Response } from "express";

export class CategoryController {
    async create(req: Request, res: Response) {
    res.send("hello my friend")
   }
} 