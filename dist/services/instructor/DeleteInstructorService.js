"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInstructorService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Instructor_1 = require("../../entities/Instructor");
class DeleteInstructorService {
    async execute(id) {
        const repo = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        if (!(await repo.findOne({ where: { id } })))
            return new Error("Instrutor não existente na base de dados");
        await repo.delete(id);
    }
}
exports.DeleteInstructorService = DeleteInstructorService;
