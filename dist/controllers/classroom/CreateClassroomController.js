"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomController = void 0;
const CreateClassroomService_1 = require("../../services/classroom/CreateClassroomService");
class CreateClassroomController {
    async handle(request, response) {
        try {
            const { title, description, link_video, watched, instructor_id, category_id, order } = request.body;
            const service = new CreateClassroomService_1.CreateClassroomService();
            const result = await service.execute({
                title, description, link_video, watched, instructor_id, category_id, order
            });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao criar aula: ${error}` });
        }
    }
}
exports.CreateClassroomController = CreateClassroomController;
