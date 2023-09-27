"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoryService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
class GetAllCategoryService {
    async execute() {
        const repo = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        // const categories = await repo.find();
        const categories = await repo
            .createQueryBuilder("category")
            .orderBy("category.order")
            .getMany();
        return categories;
    }
}
exports.GetAllCategoryService = GetAllCategoryService;
