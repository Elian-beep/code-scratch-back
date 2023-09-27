"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstructorService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Instructor_1 = require("../../entities/Instructor");
const bcrypt_1 = __importDefault(require("bcrypt"));
class CreateInstructorService {
    async execute({ name, user, password, repeatPassword }) {
        const repo = ormconfig_1.connectionSource.getRepository(Instructor_1.Instructor);
        if (await repo.findOne({ where: { user } }))
            return new Error("Nome de usuário ja existente!");
        if (repeatPassword !== password)
            return new Error("Senhas informadas não condizem!");
        const salt = await bcrypt_1.default.genSalt(12);
        const passwordHash = await bcrypt_1.default.hash(password, salt);
        const instructor = repo.create({ name, user, password: passwordHash });
        await repo.save(instructor);
        return instructor;
    }
}
exports.CreateInstructorService = CreateInstructorService;
