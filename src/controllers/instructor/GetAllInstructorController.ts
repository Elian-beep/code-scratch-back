import { Request, Response } from "express";
import { GetAllInstructorService } from "../../services/instructor/GetAllInstructorService";

export class GetAllInstructorController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllInstructorService();
            const instructors = await service.execute();
            console.log(instructors);
            return response.status(200).json(instructors);
        }catch(error){
            return response.status(500).json({ erro: `Erro gerado: ${error}` });
        }
    }
}