"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomByIdService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Classroom_1 = require("../../entities/Classroom");
class GetClassroomByIdService {
    async execute(id) {
        const repo = ormconfig_1.connectionSource.getRepository(Classroom_1.Classroom);
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
            .getOne();
        return classroom;
    }
}
exports.GetClassroomByIdService = GetClassroomByIdService;
