import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";

export class GetAllClassroomService{
    async execute(){
        const repo = connectionSource.getRepository(Classroom);
        const classrooms = await repo.find({ relations: ['instructor', 'category'] });
        return classrooms;
    }
}