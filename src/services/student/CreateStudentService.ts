import { connectionSource } from "../../database/ormconfig";
import { Student } from "../../entities/Student";
import { TCreateStudent } from "../../types/TCreateStudent";

export class CreateStudentService{
    async execute({ name, user, cpf, email, birthday }: TCreateStudent){
        const repo = connectionSource.getRepository(Student);

        if(await repo.findOne({where: { cpf }})) return new Error("Aluna ja cadastrada com este cpf");

        const dateParts = birthday.split('/');
        const birthDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) -1,
            Number(dateParts[0])
        );

        const student = repo.create({
            name, user, cpf, email, birthday: birthDate
        });

        await repo.save(student);
        return student;
    }
}