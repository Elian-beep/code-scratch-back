"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInstructorService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Instructor_1 = require("../../entities/Instructor");
class GetAllInstructorService {
    async execute() {
        const repo = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        const instructors = await repo.find({ select: ["id", "name", "user"] });
        return instructors;
    }
}
exports.GetAllInstructorService = GetAllInstructorService;
