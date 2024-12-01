import Router from "express";
import { CategoryController } from "./category.controller";
import categoryValidator from "./dto/category.validator";
import { CategoryService } from "./category.service";
import logger from "../../config/logger";

const router = Router();

const categoryService = new CategoryService();

const categoryController = new CategoryController(categoryService, logger);

router.post("/", categoryValidator, categoryController.create);

export default router;
