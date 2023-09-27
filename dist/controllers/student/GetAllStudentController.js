"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllStudentController = void 0;
const GetAllStudentService_1 = require("../../services/student/GetAllStudentService");
class GetAllStudentController {
    async handle(request, response) {
        try {
            const service = new GetAllStudentService_1.GetAllStudentService();
            const students = await service.execute();
            return response.status(200).json(students);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar alunas: ${error}` });
        }
    }
}
exports.GetAllStudentController = GetAllStudentController;
