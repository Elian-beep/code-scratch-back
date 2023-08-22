import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

export class UpdateCategoryController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const { name, description } = request.body;
    
            const service = new UpdateCategoryService();
    
            const result = await service.execute({ id, description });
    
            if(result instanceof Error) return response.status(400).json(result.message);
            
            return response.status(200).json(result);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao atualiar módulo: ${error}` });
        }
    }
}