import { Request, Response } from "express";
import { CreateStudentClassroomService } from "../../services/studentClassroom/CreateStudentClassroomService";

export class CreateStudentClassroomController{
    async handle(request: Request, response: Response){
        try{
            const { id_student, id_classroom } = request.body;
            if(!id_classroom || !id_student) return response.status(500).json({ erro: "Id's incorretos ou nulos." })
            
            const service = new CreateStudentClassroomService();
            const result = await service.execute({id_classroom, id_student});

            if(result instanceof Error) return response.status(400).json(result.message);
            return response.status(200).json(result)
        }catch(error){
            return response.status(500).json({ erro: `Ocorreu um erro ao criar relação estudante x aula: ${error}` });
        }
    }
}