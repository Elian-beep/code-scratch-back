"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStudentService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const bcrypt_1 = __importDefault(require("bcrypt"));
const TokenStudentService_1 = require("./TokenStudentService");
const Student_1 = require("../../entities/Student");
class AuthStudentService {
    async execute({ user, password }) {
        const repo = ormconfig_1.connectionSource.getRepository(Student_1.Student);
        const student = await repo.findOne({ where: { user } });
        if (!student)
            return new Error("Nome de usuário ou senha incorretos");
        const realPassword = await bcrypt_1.default.compare(password, student.password) ? true : false;
        if (!realPassword)
            return new Error("Erro na autenticação de estudante");
        const tokenService = new TokenStudentService_1.TokenStudentService();
        const token = await tokenService.generate(student.id);
        return {
            token,
            student: {
                id: student.id,
                name: student.name,
                user: student.user,
                email: student.email,
                cpf: student.cpf,
                birthday: student.birthday,
                photo: student.photo
            }
        };
    }
}
exports.AuthStudentService = AuthStudentService;
