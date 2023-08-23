import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { Classroom } from "../../entities/Classroom";
import { TUpdateClassroom } from "../../types/TUpdateClassroom";

export class UpdateClassroomService{
    async execute({ id, title, description, link_video, category_id }: TUpdateClassroom){
        const repo = connectionSource.getRepository(Classroom);
        const repoCategory = connectionSource.getRepository(Category);
        const classroom = await repo.findOne({ where: {id} });

        if(!classroom) return new Error("Aula não existente");
        if(!await repoCategory.findOne({ where: {id: category_id} })) return new Error("Módulo não existente");

        classroom.title = title ? title : classroom.title;
        classroom.description = description ? description : classroom.description;
        classroom.link_video = link_video ? link_video : classroom.link_video;
        classroom.category_id = category_id ? category_id : classroom.category_id;

        await repo.save(classroom);
        return classroom;
    }
}
