"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStudentController = void 0;
const AuthStudentService_1 = require("../../services/auth/AuthStudentService");
class AuthStudentController {
    async handle(request, response) {
        try {
            const { user, password } = request.body;
            const service = new AuthStudentService_1.AuthStudentService();
            const result = await service.execute({ user, password });
            if (result instanceof Error)
                return response.status(500).json(result.message);
            const { token, student } = result;
            return response.status(200).json({ token, student });
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro na autenticação de estudante: ${error}` });
        }
    }
}
exports.AuthStudentController = AuthStudentController;
