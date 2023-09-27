"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomController = void 0;
const DeleteClassroomService_1 = require("../../services/classroom/DeleteClassroomService");
class DeleteClassroomController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const service = new DeleteClassroomService_1.DeleteClassroomService();
            const result = await service.execute(id);
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(204).end();
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao deletar aula: ${error}` });
        }
    }
}
exports.DeleteClassroomController = DeleteClassroomController;
