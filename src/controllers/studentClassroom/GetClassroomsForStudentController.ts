import { Request, Response } from 'express';
import { GetClassroomsForStudentService } from '../../services/studentClassroom/GetClassroomsForStudentService';

export class GetClassroomsForStudentController{
    async handle(request: Request, response: Response){
        try{
            const { id_student } = request.params;
            const service = new GetClassroomsForStudentService();
            const result = await service.execute(id_student);
            

            if(result instanceof Error) return response.status(400).json(result.message);
            return response.status(200).json({ nClassrooms: result})
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar aulas para este aluno: ${error}` })
        }
    }
}