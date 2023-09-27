"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstructorController = void 0;
const CreateInstructorService_1 = require("../../services/instructor/CreateInstructorService");
class CreateInstructorController {
    async handle(request, response) {
        try {
            const { name, user, password, repeatPassword } = request.body;
            if (name === "" || user === "" || password === "" || repeatPassword === "")
                return response.status(500).json({ erro: "Por favor, preencha todos os campos!" });
            const service = new CreateInstructorService_1.CreateInstructorService();
            const result = await service.execute({ name, user, password, repeatPassword });
            if (result instanceof Error)
                return response.status(500).json(result.message);
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Erro gerado: ${error}` });
        }
    }
}
exports.CreateInstructorController = CreateInstructorController;
