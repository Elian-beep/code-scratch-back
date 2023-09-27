"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomByCategoryService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Classroom_1 = require("../../entities/Classroom");
class GetClassroomByCategoryService {
    async execute(id_category) {
        const repo = ormconfig_1.connectionSource.getRepository(Classroom_1.Classroom);
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
            .where({ category_id: id_category })
            .orderBy("classroom.order", "ASC")
            .getMany();
        return classrooms;
    }
}
exports.GetClassroomByCategoryService = GetClassroomByCategoryService;
