"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
const Classroom_1 = require("../../entities/Classroom");
const Instructor_1 = require("../../entities/Instructor");
class CreateClassroomService {
    async execute({ title, description, link_video, watched, instructor_id, category_id, order }) {
        const repo = ormconfig_1.connectionSource.getRepository(Classroom_1.Classroom);
        const repoInstructor = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        const repoCategory = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        if (!await repoInstructor.findOne({ where: { id: instructor_id } }))
            return new Error("Instrutor não existente!");
        if (!await repoCategory.findOne({ where: { id: category_id } }))
            return new Error("Módulo não existente!");
        const classroom = repo.create({ title, description, link_video, watched, instructor_id, category_id, order });
        await repo.save(classroom);
        return classroom;
    }
}
exports.CreateClassroomService = CreateClassroomService;
