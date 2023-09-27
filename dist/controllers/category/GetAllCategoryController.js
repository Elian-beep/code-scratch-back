"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoryController = void 0;
const GetAllCategoryService_1 = require("../../services/category/GetAllCategoryService");
class GetAllCategoryController {
    async handle(request, response) {
        try {
            const service = new GetAllCategoryService_1.GetAllCategoryService();
            const categories = await service.execute();
            return response.json(categories);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar módulos: ${error}` });
        }
    }
}
exports.GetAllCategoryController = GetAllCategoryController;
