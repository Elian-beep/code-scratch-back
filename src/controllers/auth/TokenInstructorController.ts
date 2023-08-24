import { Request, Response, NextFunction } from "express";
import { TokenInstructorService } from "../../services/auth/TokenInstructorService";

export class TokenInstructorController{
    async handleCheck(request: Request, response: Response, next: NextFunction){
        try{
            const authHeader = request.headers['authorization'];
            const service = new TokenInstructorService();
            if (!authHeader)
                return response.status(500).json({ message: "Erro na autenticação" })

            const token = authHeader && authHeader.split(" ")[1];
            const result = service.check(token)
            if (!result)
                return response.status(500).json(result);
            next();
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro no token: ${error}` });
        }
    }
}