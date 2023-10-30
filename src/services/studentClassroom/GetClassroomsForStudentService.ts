import { connectionSource } from "../../database/ormconfig";
import { StudentClassroom } from "../../entities/StudentClassroom";


export class GetClassroomsForStudentService{
    async execute(id_student: string){
        const repo = connectionSource.getRepository(StudentClassroom);
        const nClassrooms = repo.count({
            where: { student_id: id_student }
        }) || 0;

        if(!nClassrooms) return new Error("Estudante não encontrado");

        return nClassrooms;
    }

}