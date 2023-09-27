"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Category_1 = require("../../entities/Category");
const Classroom_1 = require("../../entities/Classroom");
class UpdateClassroomService {
    async execute({ id, title, description, link_video, category_id, order }) {
        const repo = ormconfig_1.connectionSource.getRepository(Classroom_1.Classroom);
        const repoCategory = ormconfig_1.connectionSource.getRepository(Category_1.Category);
        const classroom = await repo.findOne({ where: { id } });
        if (!classroom)
            return new Error("Aula não existente");
        if (!await repoCategory.findOne({ where: { id: category_id } }))
            return new Error("Módulo não existente");
        classroom.title = title ? title : classroom.title;
        classroom.description = description ? description : classroom.description;
        classroom.link_video = link_video ? link_video : classroom.link_video;
        classroom.category_id = category_id ? category_id : classroom.category_id;
        classroom.order = order ? order : classroom.order;
        await repo.save(classroom);
        return classroom;
    }
}
exports.UpdateClassroomService = UpdateClassroomService;
