"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentController = void 0;
const UpdateStudentService_1 = require("../../services/student/UpdateStudentService");
class UpdateStudentController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { name, user, cpf, email, birthday, photo } = request.body;
            const service = new UpdateStudentService_1.UpdateStudentService();
            const result = await service.execute({
                id, name, user, cpf, email, birthday, photo
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao atualizar aluna: ${error}` });
        }
    }
}
exports.UpdateStudentController = UpdateStudentController;
