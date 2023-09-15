import { Request, Response } from "express";
import { GetClassroomByIdService } from "../../services/classroom/GetClassroomByIdService";

export class GetClassroomByIdController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetClassroomByIdService();
            const { id } = request.params;
            const classroom = await service.execute(id);
            return response.status(200).json(classroom);
        }catch(error){
            return response.status(500).json(
                { erro: `Ocorreu um erro ao buscar aula por id: ${error}` })
        }
    }
}