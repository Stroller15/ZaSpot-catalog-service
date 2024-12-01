import Router from "express";
import { CategoryController } from "./category.controller";
import categoryValidator from "./dto/category.validator";

const categoryController = new CategoryController();
const router = Router();

router.get("/", categoryValidator, categoryController.create);

export default router;
