import { Request, Response, NextFunction } from "express";
import { CheckTokenStudentService } from "../../services/auth/CheckTokenStudentService";

export class CheckTokenStudentController {
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const {token} = request.body;
            const service = new CheckTokenStudentService();

            if (!token) return response.status(401).json({ msg: "Acesso negado, token inexistente" });

            const result = service.generate(token);
            return true;

        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro no token: ${error}` });
        }

    }
}