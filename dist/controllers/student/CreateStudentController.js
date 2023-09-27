"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentController = void 0;
const CreateStudentService_1 = require("../../services/student/CreateStudentService");
class CreateStudentController {
    async handle(request, response) {
        try {
            const { name, user, cpf, email, birthday, photo } = request.body;
            const service = new CreateStudentService_1.CreateStudentService();
            const result = await service.execute({
                name, user, cpf, email, birthday, photo
            });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(201).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao cadastrar aluna: ${error}` });
        }
    }
}
exports.CreateStudentController = CreateStudentController;
