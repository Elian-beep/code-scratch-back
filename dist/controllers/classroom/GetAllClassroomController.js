"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClassroomController = void 0;
const GetAllClassroomService_1 = require("../../services/classroom/GetAllClassroomService");
class GetAllClassroomController {
    async handle(request, response) {
        try {
            const service = new GetAllClassroomService_1.GetAllClassroomService();
            const classrooms = await service.execute();
            return response.status(200).json(classrooms);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar salas: ${error}` });
        }
    }
}
exports.GetAllClassroomController = GetAllClassroomController;
