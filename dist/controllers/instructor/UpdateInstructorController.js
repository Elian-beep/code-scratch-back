"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstructorController = void 0;
const UpdateInstructorService_1 = require("../../services/instructor/UpdateInstructorService");
class UpdateInstructorController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { name, user } = request.body;
            const service = new UpdateInstructorService_1.UpdateInstructorService();
            const result = await service.execute({ id, name, user });
            if (result instanceof Error)
                return response.status(400).json(result.message);
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro na atualização do instrutor: ${error}` });
        }
    }
}
exports.UpdateInstructorController = UpdateInstructorController;
