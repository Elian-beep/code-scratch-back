import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { Classroom } from "../../entities/Classroom";
import { Instructor } from "../../entities/Instructor";
import { TCreateClassroom } from "../../types/TCreateClassroom";

export class CreateClassroomService{
    async execute({ title, description, link_video, watched, instructor_id, category_id }: TCreateClassroom){
        const repo = connectionSource.getRepository(Classroom);
        const repoInstructor = connectionSource.getRepository(Instructor);
        const repoCategory = connectionSource.getRepository(Category);

        if(!await repoInstructor.findOne({ where: {id: instructor_id} })) return new Error("Instrutor não existente!");
        if(!await repoCategory.findOne({ where: {id: category_id} })) return new Error("Módulo não existente!");

        const classroom = repo.create({ title, description, link_video, watched, instructor_id, category_id });

        await repo.save(classroom);
        return classroom;

    }
}