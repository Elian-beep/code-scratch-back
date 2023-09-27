"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryController = void 0;
const UpdateCategoryService_1 = require("../../services/category/UpdateCategoryService");
class UpdateCategoryController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { name, description, order } = request.body;
            const service = new UpdateCategoryService_1.UpdateCategoryService();
            const result = await service.execute({ id, description, order });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao atualiar módulo: ${error}` });
        }
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
