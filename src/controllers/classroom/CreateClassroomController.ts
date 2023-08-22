import { Request, Response } from "express";
import { CreateClassroomService } from "../../services/classroom/CreateClassroomService";

export class CreateClassroomController{
    async handle(request: Request, response: Response){
        try{
            const { title, description, link_video, watched, instructor_id, category_id } = request.body;
            const service = new CreateClassroomService();
            const result = await service.execute({
                title, description, link_video, watched, instructor_id, category_id
            });

            if(result instanceof Error) return response.status(400).json(result.message);
            return response.status(200).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao criar aula: ${error}` });
        }
    }
}