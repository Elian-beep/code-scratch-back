"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Student_1 = require("../../entities/Student");
const bcrypt_1 = __importDefault(require("bcrypt"));
class CreateStudentService {
    async execute({ name, user, cpf, email, birthday, photo }) {
        const repo = ormconfig_1.connectionSource.getRepository(Student_1.Student);
        if (await repo.findOne({ where: { cpf } }))
            return new Error("Aluna ja cadastrada com este cpf");
        const dateParts = birthday.split('/');
        const birthDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
        const salt = await bcrypt_1.default.genSalt(12);
        const passwordHash = await bcrypt_1.default.hash(cpf, salt);
        const student = repo.create({
            name, user, cpf, email, birthday: birthDate, password: passwordHash, photo
        });
        await repo.save(student);
        return student;
    }
}
exports.CreateStudentService = CreateStudentService;
