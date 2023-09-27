"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomController = void 0;
const UpdateClassroomService_1 = require("../../services/classroom/UpdateClassroomService");
class UpdateClassroomController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { title, description, link_video, category_id, order } = request.body;
            const service = new UpdateClassroomService_1.UpdateClassroomService();
            const result = await service.execute({ id, title, description, link_video, category_id, order });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro na atualização da aula: ${error}` });
        }
    }
}
exports.UpdateClassroomController = UpdateClassroomController;
