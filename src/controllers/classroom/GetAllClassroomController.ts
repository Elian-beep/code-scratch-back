import { Request, Response, json } from "express";
import { GetAllClassroomService } from "../../services/classroom/GetAllClassroomService";

export class GetAllClassroomController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllClassroomService();
            const classrooms = await service.execute();
            return response.status(200).json(classrooms);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar salas: ${error}` });
        }
    }
}