import { connectionSource } from "../../database/ormconfig";
import { Instructor } from "../../entities/Instructor";

export class GetAllInstructorService{
    async execute(){
        const repo = connectionSource.getRepository(Instructor);

        const instructors = await repo.find({ select: ["id", "name", "user"] });
        return instructors;
    }
}