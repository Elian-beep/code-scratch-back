"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentController = void 0;
const DeleteStudentService_1 = require("../../services/student/DeleteStudentService");
class DeleteStudentController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const service = new DeleteStudentService_1.DeleteStudentService();
            const result = await service.execute(id);
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(400).end();
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao excluir aluna: ${error}` });
        }
    }
}
exports.DeleteStudentController = DeleteStudentController;
