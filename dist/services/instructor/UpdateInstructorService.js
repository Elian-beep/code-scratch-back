"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstructorService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Instructor_1 = require("../../entities/Instructor");
class UpdateInstructorService {
    async execute({ id, name, user }) {
        const repo = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        const instructor = await repo.findOne({ where: { id } });
        if (!instructor)
            return new Error("Instrutor não encontrado");
        instructor.name = name ? name : instructor.name;
        instructor.user = user ? user : instructor.user;
        await repo.save(instructor);
        instructor.password = "";
        return instructor;
    }
}
exports.UpdateInstructorService = UpdateInstructorService;
