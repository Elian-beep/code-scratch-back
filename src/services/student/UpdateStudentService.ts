import { connectionSource } from "../../database/ormconfig";
import { Student } from "../../entities/Student";
import { TUpdateStudent } from "../../types/TUpdateStudent";

export class UpdateStudentService {
    async execute({ id, name, user, cpf, email, birthday }: TUpdateStudent) {
        const repo = connectionSource.getRepository(Student);
        const student = await repo.findOne({ where: { id } });

        if (!student) return new Error("Aluna não encontrada");

        if (birthday) {
            const dateParts = birthday.split('/');
            const birthDate = new Date(
                Number(dateParts[2]),
                Number(dateParts[1]) - 1,
                Number(dateParts[0])
            );
            student.birthday = birthday ? birthDate : student.birthday;
        }

        student.name = name ? name : student.name;
        student.user = user ? user : student.user;
        student.cpf = cpf ? cpf : student.cpf;
        student.email = email ? email : student.email;

        await repo.save(student);
        return student;
    }
}