import { connectionSource } from "../../database/ormconfig";
import { Instructor } from "../../entities/Instructor";
import { ICreateInstructor } from "../../types/TCreateInstructor";
import bcrypt from "bcrypt";

export class CreateInstructorService{
    async execute({ name, user, password, repeatPassword }: ICreateInstructor): Promise<Instructor | Error>{
        const repo = connectionSource.getRepository(Instructor);

        if(await repo.findOne({ where: { user } })) return new Error("Nome de usuário ja existente!");

        if(repeatPassword !== password) return new Error("Senhas informadas não condizem!");

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const instructor = repo.create({ name, user, password: passwordHash });

        await repo.save(instructor);
        return instructor;
    }
}