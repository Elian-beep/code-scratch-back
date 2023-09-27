"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
class CreateCategoryService {
    async execute({ description, order }) {
        const repo = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        if (await repo.findOne({ where: { description } }))
            return new Error("Módulo ja existente");
        const category = repo.create({ description, order });
        await repo.save(category);
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
