import { Request, Response } from "express";
import { AuthStudentService } from "../../services/auth/AuthStudentService";

export class AuthStudentController{
    async handle(request: Request, response: Response){
        try{
            const { user, password } = request.body;
            const service = new AuthStudentService();

            const result = await service.execute({ user, password });

            if(result instanceof Error) return response.status(500).json(result.message);

            return response.status(200).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro na autenticação de estudante: ${error}` });
        }
    }
}