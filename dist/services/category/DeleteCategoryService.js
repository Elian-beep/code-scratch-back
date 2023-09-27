"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
class DeleteCategoryService {
    async execute(id) {
        const repo = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        if (!(await repo.findOne({ where: { id } }))) {
            return new Error("Módulo não existente!");
        }
        await repo.delete(id);
    }
}
exports.DeleteCategoryService = DeleteCategoryService;
