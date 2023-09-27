"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomByIdController = void 0;
const GetClassroomByIdService_1 = require("../../services/classroom/GetClassroomByIdService");
class GetClassroomByIdController {
    async handle(request, response) {
        try {
            const service = new GetClassroomByIdService_1.GetClassroomByIdService();
            const { id } = request.params;
            const classroom = await service.execute(id);
            return response.status(200).json(classroom);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar aula por id: ${error}` });
        }
    }
}
exports.GetClassroomByIdController = GetClassroomByIdController;
