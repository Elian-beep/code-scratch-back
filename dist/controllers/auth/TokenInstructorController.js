"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInstructorController = void 0;
const TokenInstructorService_1 = require("../../services/auth/TokenInstructorService");
class TokenInstructorController {
    async handleCheck(request, response, next) {
        try {
            const authHeader = request.headers['authorization'];
            const service = new TokenInstructorService_1.TokenInstructorService();
            if (!authHeader)
                return response.status(500).json({ message: "Erro na autenticação" });
            const token = authHeader && authHeader.split(" ")[1];
            const result = service.check(token);
            if (!result)
                return response.status(500).json(result);
            next();
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro no token: ${error}` });
        }
    }
}
exports.TokenInstructorController = TokenInstructorController;
