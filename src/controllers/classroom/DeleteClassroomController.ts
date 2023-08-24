import { Request, Response } from 'express';
import { DeleteClassroomService } from '../../services/classroom/DeleteClassroomService';

export class DeleteClassroomController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const service = new DeleteClassroomService();
            const result = await service.execute(id);

            if(result instanceof Error) return response.status(400).json(result.message);

            return response.status(204).end();
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao deletar aula: ${error}` });
        }
    }
}