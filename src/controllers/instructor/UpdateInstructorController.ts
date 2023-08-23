import { Request, Response } from "express";
import { UpdateInstructorService } from "../../services/instructor/UpdateInstructorService";

export class UpdateInstructorController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const { name, user } = request.body;

            const service = new UpdateInstructorService();
            const result = await service.execute({ id, name, user });

            if(result instanceof Error) return response.status(400).json(result.message);
    
            return response.status(200).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro na atualização do instrutor: ${error}` });
        }
    }
}