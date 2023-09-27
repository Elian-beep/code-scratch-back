"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTokenStudentController = void 0;
const CheckTokenStudentService_1 = require("../../services/auth/CheckTokenStudentService");
class CheckTokenStudentController {
    async handle(request, response, next) {
        try {
            const { token } = request.body;
            const service = new CheckTokenStudentService_1.CheckTokenStudentService();
            if (!token)
                return response.status(401).json({ msg: "Acesso negado, token inexistente" });
            const result = service.generate(token);
            return true;
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro no token: ${error}` });
        }
    }
}
exports.CheckTokenStudentController = CheckTokenStudentController;
