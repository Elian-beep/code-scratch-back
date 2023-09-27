"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Student_1 = require("../../entities/Student");
class DeleteStudentService {
    async execute(id) {
        const repo = ormconfig_1.connectionSource.getRepository(Student_1.Student);
        if (!(await repo.findOne({ where: { id } })))
            return new Error("Aluna não cadastrada");
        await repo.delete(id);
    }
}
exports.DeleteStudentService = DeleteStudentService;
