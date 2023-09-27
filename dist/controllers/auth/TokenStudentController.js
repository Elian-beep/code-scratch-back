"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStudentController = void 0;
const TokenStudentService_1 = require("../../services/auth/TokenStudentService");
class TokenStudentController {
    async handleCheck(request, response, next) {
        try {
            const authHeader = request.headers['authorization'];
            const service = new TokenStudentService_1.TokenStudentService();
            if (!authHeader)
                return response.status(500).json({ message: "Erro na autenticação de estudante" });
            const token = authHeader && authHeader.split(" ")[1];
            const result = service.check(token);
            console.log('result -> ', result);
            if (!result)
                return response.status(401).json({ message: 'Erro na autenticação ou Token expirado' });
            next();
        }
        catch (error) {
            return response.status(401).json({ erro: `Ocorreu um erro no token: ${error}` });
        }
    }
}
exports.TokenStudentController = TokenStudentController;
