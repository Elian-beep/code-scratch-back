import { connectionSource } from "../../database/ormconfig";
import { Classroom } from "../../entities/Classroom";

export class GetAllClassroomService {
    async execute() {
        const repo = connectionSource.getRepository(Classroom);
        const classrooms = await repo
            .createQueryBuilder("classroom")
            .innerJoinAndSelect("classroom.instructor", "instructor")
            .innerJoinAndSelect("classroom.category", "category")
            .select([
                "classroom.id",
                "classroom.title",
                "classroom.link_video",
                "classroom.order",
                "instructor.id",
                "instructor.name",
                "category.id",
                "category.description"
            ])
            .getMany()
        return classrooms;
    }
}