import { Request, Response } from 'express';
import { DeleteStudentService } from '../../services/student/DeleteStudentService';

export class DeleteStudentController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const service = new DeleteStudentService();
            const result = await service.execute(id);

            if(result instanceof Error) return response.status(400).json(result.message);

            return response.status(400).end();
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao excluir aluna: ${error}` });
        }
    }
}