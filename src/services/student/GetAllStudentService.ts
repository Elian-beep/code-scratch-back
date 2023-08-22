import { connectionSource } from "../../database/ormconfig";
import { Student } from "../../entities/Student";

export class GetAllStudentService{
    async execute(){
        const repo = connectionSource.getRepository(Student);

        const students = await repo.find();
        return students;
    }
}