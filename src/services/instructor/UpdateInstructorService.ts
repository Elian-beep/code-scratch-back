import { connectionSource } from "../../database/ormconfig";
import { Instructor } from "../../entities/Instructor";
import { TUpdateInstructor } from "../../types/TUpdateInstructor";

export class UpdateInstructorService{
    async execute({ id, name, user }: TUpdateInstructor){
        const repo = connectionSource.getRepository(Instructor);
        const instructor  = await repo.findOne({ where: {id} });

        if(!instructor) return new Error("Instrutor não encontrado");

        instructor.name = name ? name : instructor.name;
        instructor.user = user ? user : instructor.user;

        await repo.save(instructor);
        instructor.password = "";
        return instructor;
    }
}