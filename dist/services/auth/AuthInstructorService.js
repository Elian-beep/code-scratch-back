"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInstructorService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const bcrypt_1 = __importDefault(require("bcrypt"));
const TokenInstructorService_1 = require("./TokenInstructorService");
const Instructor_1 = require("../../entities/Instructor");
class AuthInstructorService {
    async execute({ user, password }) {
        const repo = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        const instructor = await repo.find({ where: { user } });
        if (!instructor)
            return new Error("Nome de usuário ou senha incorretos!");
        const realPassword = await bcrypt_1.default.compare(password, instructor[0].password) ? true : false;
        if (!realPassword)
            return new Error("Erro na autenticação");
        const tokenService = new TokenInstructorService_1.TokenInstructorService();
        const token = tokenService.generate(instructor[0].id);
        return token;
    }
}
exports.AuthInstructorService = AuthInstructorService;
