"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Classroom_1 = require("../../entities/Classroom");
class DeleteClassroomService {
    async execute(id) {
        const repo = ormconfig_1.connectionSource.getRepository(Classroom_1.Classroom);
        if (!(await repo.findOne({ where: { id } })))
            return new Error("Aula não existente na base de dados");
        await repo.delete(id);
    }
}
exports.DeleteClassroomService = DeleteClassroomService;
