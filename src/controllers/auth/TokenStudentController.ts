import { Request, Response, NextFunction } from "express";
import { TokenStudentService } from "../../services/auth/TokenStudentService";

export class TokenStudentController{
    async handleCheck(request: Request, response: Response, next: NextFunction){
        try{
            const authHeader = request.headers['authorization'];
            const service = new TokenStudentService();
            if(!authHeader) return response.status(500).json({ message: "Erro na autenticação de estudante" });

            const token = authHeader && authHeader.split(" ")[1];
            const result = service.check(token)

            if (!result) return response.status(500).json(result);

            next();
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro no token: ${error}` });
        }
    }
}