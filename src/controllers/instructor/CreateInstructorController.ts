import { Request, Response } from "express";
import { CreateInstructorService } from "../../services/instructor/CreateInstructorService";

export class CreateInstructorController{
    async handle(request: Request, response: Response){
        try{
            const { name, user, password, repeatPassword } = request.body;
            if(name === "" || user === "" || password === "" || repeatPassword === "") return response.status(500).json({ erro: "Por favor, preencha todos os campos!" });
            const service = new CreateInstructorService();
            const result = await service.execute({ name, user, password, repeatPassword });

            if(result instanceof Error) return response.status(500).json(result.message);

            return response.status(200).json(result);


        }catch(error){
            return response.status(500).json({ erro: `Erro gerado: ${error}` });
        }
    }
}