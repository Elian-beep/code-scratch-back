import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController{
    async handle(request: Request, response: Response){
        try{
            const { description, order } = request.body;
            const service = new CreateCategoryService();
            const result = await service.execute({ description, order });

            if(result instanceof Error) return response.status(400).json(result.message);
            return response.json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao criar módulo: ${error}` });
        }
    }
}