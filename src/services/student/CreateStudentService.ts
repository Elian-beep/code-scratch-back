import { connectionSource } from "../../database/ormconfig";
import { Student } from "../../entities/Student";
import { TCreateStudent } from "../../types/TCreateStudent";
import bcrypt from "bcrypt";

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

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(cpf, salt);

        const student = repo.create({
            name, user, cpf, email, birthday: birthDate, password: passwordHash
        });

        await repo.save(student);
        return student;
    }
}