"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInstructorController = void 0;
const AuthInstructorService_1 = require("../../services/auth/AuthInstructorService");
class AuthInstructorController {
    async handle(request, response) {
        try {
            const { user, password } = request.body;
            const service = new AuthInstructorService_1.AuthInstructorService();
            const result = await service.execute({
                user, password
            });
            if (result instanceof Error)
                return response.status(500).json(result.message);
            return response.status(200).json(result);
        }
        catch (e) {
            return response.status(500).json({ erro: `Ocorreu um erro na autenticação: ${e}` });
        }
    }
}
exports.AuthInstructorController = AuthInstructorController;
