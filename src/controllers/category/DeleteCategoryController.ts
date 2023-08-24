import { Request, Response } from 'express';
import { DeleteCategoryService } from '../../services/category/DeleteCategoryService';

export class DeleteCategoryController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const service = new DeleteCategoryService();
    
            const result = await service.execute(id);
    
            if(result instanceof Error){
                return response.status(400).json(result.message);
            }
    
            return response.status(204).end();
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao excluir módulo: ${error}` });
        }
    }
}