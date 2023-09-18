import { Request, Response } from "express";
import { UpdateClassroomService } from "../../services/classroom/UpdateClassroomService";


export class UpdateClassroomController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const { title, description, link_video, category_id, order } = request.body;

            const service = new UpdateClassroomService();
            const result = await service.execute({ id, title, description, link_video, category_id, order });
            
            if(result instanceof Error) return response.status(400).json(result.message);

            return response.status(200).json(result);
        
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro na atualização da aula: ${error}` });
        }
    }
}