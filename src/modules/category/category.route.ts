import { CategoryController } from "./category.controller";
import categoryValidator from "./dto/category.validator";
import { CategoryService } from "./category.service";
import logger from "../../config/logger";
import Router from "express";
import { asyncWrapper } from "../../common/utils/asyncWrapper";

const router = Router();

const categoryService = new CategoryService();

const categoryController = new CategoryController(categoryService, logger);

router.post("/", categoryValidator, asyncWrapper(categoryController.create));

export default router;
