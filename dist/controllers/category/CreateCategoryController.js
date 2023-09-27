"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../../services/category/CreateCategoryService");
class CreateCategoryController {
    async handle(request, response) {
        try {
            const { description, order } = request.body;
            const service = new CreateCategoryService_1.CreateCategoryService();
            const result = await service.execute({ description, order });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao criar módulo: ${error}` });
        }
    }
}
exports.CreateCategoryController = CreateCategoryController;
