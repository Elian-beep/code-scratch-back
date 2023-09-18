import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";

export class GetClassroomByIdService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Classroom);
        const classroom = await repo
            .createQueryBuilder("classroom")
            .innerJoinAndSelect("classroom.instructor", "instructor")
            .innerJoinAndSelect("classroom.category", "category")
            .select([
                "classroom.id",
                "classroom.title",
                "classroom.link_video",
                "classroom.description",
                "classroom.order",
                "instructor.name",
                "category.description"
            ])
            .where({ id })
            .getOne()
        return classroom;
    }
}