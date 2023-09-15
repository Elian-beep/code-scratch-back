import { Request, Response } from "express";
import { GetClassroomByCategoryService } from "../../services/classroom/GetClassroomByCategoryService";

export class GetClassroomByCategoryController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetClassroomByCategoryService();
            const { id_category } = request.params;
            const classroons = await service.execute(id_category);
            return response.status(200).json(classroons);
        }catch(error){
            return response.status(500).json(
                { erro: `Ocorreu um erro ao buscas aulas por módulo: ${error}` })
        }
    }
}