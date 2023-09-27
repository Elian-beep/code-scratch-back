"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInstructorController = void 0;
const GetAllInstructorService_1 = require("../../services/instructor/GetAllInstructorService");
class GetAllInstructorController {
    async handle(request, response) {
        try {
            const service = new GetAllInstructorService_1.GetAllInstructorService();
            const instructors = await service.execute();
            console.log(instructors);
            return response.status(200).json(instructors);
        }
        catch (error) {
            return response.status(500).json({ erro: `Erro gerado: ${error}` });
        }
    }
}
exports.GetAllInstructorController = GetAllInstructorController;
