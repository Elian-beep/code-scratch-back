import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";

export class GetClassroomByCategoryService{
    async execute(id_category: string){
        const repo = connectionSource.getRepository(Classroom);
        
        const classrooms = await repo
            .createQueryBuilder("classroom")
            .innerJoinAndSelect("classroom.instructor", "instructor")
            .innerJoinAndSelect("classroom.category", "category")
            .select([
                "classroom.id",
                "classroom.title",
                "classroom.link_video",
                "instructor.id",
                "instructor.name",
                "category.id",
                "category.description"
            ])
            .where({ category_id: id_category })
            .getMany()
        return classrooms;
    }
}