import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/student/UpdateStudentService";

export class UpdateStudentController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const { name, user, cpf, email, birthday } = request.body;

            const service = new UpdateStudentService();
            const result = await service.execute({
                id, name, user, cpf, email, birthday
            });

            if(result instanceof Error){
                return response.status(400).json(result.message);
            }

            return response.status(200).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao atualizar aluna: ${error}` });
        }
    }
}