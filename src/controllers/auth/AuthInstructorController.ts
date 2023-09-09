import { Request, Response } from "express";
import { AuthInstructorService } from "../../services/auth/AuthInstructorService";

export class AuthInstructorController {
    async handle(request: Request, response: Response) {
        try{
            const { user, password } = request.body;
            const service = new AuthInstructorService();
            
            const result = await service.execute({
                user, password
            });

            if (result instanceof Error)
                return response.status(500).json(result.message);
    
            return response.status(200).json(result);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro na autenticação: ${e}` });
        }
    }
}