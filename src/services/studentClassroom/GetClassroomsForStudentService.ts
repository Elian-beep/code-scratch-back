import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";
import { StudentClassroom } from "../../entities/StudentClassroom";


export class GetClassroomsForStudentService{
    async execute(id_student: string){
        const repo = connectionSource.getRepository(StudentClassroom);
        const classroomRepo = connectionSource.getRepository(Classroom);

        const nClassroomsAssisted = await repo.count({
            where: { student_id: id_student }
        }) || 0;
        if(!nClassroomsAssisted) return new Error("Estudante não encontrado");

        const countClassrooms = (await classroomRepo.find()).length

        const nRealAssisted = nClassroomsAssisted > countClassrooms 
        ?
            nClassroomsAssisted - (nClassroomsAssisted - countClassrooms) 
        :
            nClassroomsAssisted;
        
        const percAssisted = Math.trunc((nRealAssisted / countClassrooms) * 100);


        return percAssisted;
    }
}