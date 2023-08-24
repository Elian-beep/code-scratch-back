import { connectionSource } from "../../database/ormconfig";
import { Student } from "../../entities/Student";

export class DeleteStudentService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Student);

        if(!(await repo.findOne({ where: {id} }))) return new Error("Aluna não cadastrada");

        await repo.delete(id);
    }
}