"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = require("../../services/category/DeleteCategoryService");
class DeleteCategoryController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const service = new DeleteCategoryService_1.DeleteCategoryService();
            const result = await service.execute(id);
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.status(204).end();
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao excluir módulo: ${error}` });
        }
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
