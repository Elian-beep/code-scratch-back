import { Request, Response } from "express";
import { CreateStudentService } from "../../services/student/CreateStudentService";

export class CreateStudentController{
    async handle(request: Request, response: Response){
        try{
            const { name, user, cpf, email, birthday, photo } = request.body;
            const service = new CreateStudentService();
            const result = await service.execute({
                name, user, cpf, email, birthday, photo
            });

            if(result instanceof Error) return response.status(400).json(result.message);

            return response.status(201).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao cadastrar aluna: ${error}` });
        }
    }
}