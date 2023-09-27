"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllStudentService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Student_1 = require("../../entities/Student");
class GetAllStudentService {
    async execute() {
        const repo = ormconfig_1.connectionSource.getRepository(Student_1.Student);
        const students = await repo.find();
        return students;
    }
}
exports.GetAllStudentService = GetAllStudentService;
