import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";

export class DeleteClassroomService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Classroom);
        if(!(await repo.findOne({ where: {id} }))) return new Error("Aula não existente na base de dados");
        
        await repo.delete(id);
    }
}