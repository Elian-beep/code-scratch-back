"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTokenStudentService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class CheckTokenStudentService {
    async generate(token) {
        try {
            const secret = process.env.SECRET_STUDENT;
            jsonwebtoken_1.default.verify(token, secret);
        }
        catch (error) {
            return new Error(`Token inválido: ${error}`);
        }
    }
}
exports.CheckTokenStudentService = CheckTokenStudentService;
