import CategoryModel from "./dto/category.model";
import { Category } from "./dto/category.types";

export class CategoryService {
    async create(category: Category) {
        const newCategory = new CategoryModel(category);
        return newCategory.save();
    }
}