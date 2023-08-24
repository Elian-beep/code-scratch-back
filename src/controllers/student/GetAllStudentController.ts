import { Request, Response } from 'express';
import { GetAllStudentService } from '../../services/student/GetAllStudentService';

export class GetAllStudentController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllStudentService();
            const students = await service.execute();
            return response.status(200).json(students);
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao buscar alunas: ${error}` });
        }
    }
}