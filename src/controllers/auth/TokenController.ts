import { Request, Response, NextFunction } from "express";
import { TokenService } from "../../services/auth/TokenService";

export class TokenController{
    async handleCheck(request: Request, response: Response, next: NextFunction){
        try{
            const authHeader = request.headers['authorization'];
            const service = new TokenService();
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