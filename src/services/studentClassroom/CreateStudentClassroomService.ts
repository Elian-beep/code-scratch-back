import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";
import { Student } from "../../entities/Student";
import { StudentClassroom } from "../../entities/StudentClassroom";
import { TCreateStudentClassroom } from "../../types/TCreateStudentClassroom";

export class CreateStudentClassroomService{
    async execute({id_classroom, id_student} : TCreateStudentClassroom){
        const repo = connectionSource.getRepository(StudentClassroom);
        const repoStudent = connectionSource.getRepository(Student);
        const repoClassroom = connectionSource.getRepository(Classroom);

        const student = repoStudent.findOne({ where: {id: id_student} });
        const classroom = repoClassroom.findOne({ where: {id: id_classroom} });

        if(!student) return new Error("Estudante não encontrada");
        if(!classroom) return new Error("Aula não encontrada");

        const existing = await repo.findOne({
            where: {
                student_id: id_student,
                classroom_id: id_classroom,
            }
        });
        console.log('existing -> ', existing);
        
        if(existing) return {message: "Relação ja existente"};

        const studentClassroom = repo.create({classroom_id: id_classroom, student_id: id_student});
        await repo.save(studentClassroom);
        return studentClassroom;
    }
}