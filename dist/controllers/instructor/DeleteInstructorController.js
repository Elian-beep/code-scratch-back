"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInstructorController = void 0;
const DeleteInstructorService_1 = require("../../services/instructor/DeleteInstructorService");
class DeleteInstructorController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const service = new DeleteInstructorService_1.DeleteInstructorService();
            const result = await service.execute(id);
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.status(204).end();
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao deletar instrutor: ${error}` });
        }
    }
}
exports.DeleteInstructorController = DeleteInstructorController;
