"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomByCategoryController = void 0;
const GetClassroomByCategoryService_1 = require("../../services/classroom/GetClassroomByCategoryService");
class GetClassroomByCategoryController {
    async handle(request, response) {
        try {
            const service = new GetClassroomByCategoryService_1.GetClassroomByCategoryService();
            const { id_category } = request.params;
            const classroons = await service.execute(id_category);
            return response.status(200).json(classroons);
        }
        catch (error) {
            return response.status(500).json({ erro: `Ocorreu um erro ao buscas aulas por módulo: ${error}` });
        }
    }
}
exports.GetClassroomByCategoryController = GetClassroomByCategoryController;
