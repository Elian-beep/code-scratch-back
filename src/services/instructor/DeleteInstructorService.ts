import { connectionSource } from "../../database/ormconfig";
import { Instructor } from "../../entities/Instructor";

export class DeleteInstructorService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Instructor);

        if(!(await repo.findOne({where: {id}}))) return new Error("Instrutor não existente na base de dados");

        await repo.delete(id);
    }
}