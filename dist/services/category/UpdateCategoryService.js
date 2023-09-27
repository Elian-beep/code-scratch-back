"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
class UpdateCategoryService {
    async execute({ id, description, order }) {
        const repo = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        const category = await repo.findOne({ where: { id } });
        if (!category)
            return new Error("Módulo não existente");
        category.created_at = category.created_at;
        category.description = description ? description : category.description;
        category.order = order ? order : category.order;
        await repo.save(category);
        return category;
    }
}
exports.UpdateCategoryService = UpdateCategoryService;
