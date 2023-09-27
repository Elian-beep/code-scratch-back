"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStudentService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class TokenStudentService {
    async generate(id_user) {
        const secret = process.env.SECRET_STUDENT;
        const token = jsonwebtoken_1.default.sign({
            id: id_user
        }, secret, {
            // expiresIn: 30
            expiresIn: 3600
        });
        return token;
    }
    check(token) {
        if (!token)
            return new Error("Acesso negado");
        const secret = process.env.SECRET_STUDENT;
        if (jsonwebtoken_1.default.verify(token, secret)) {
            console.log("Token válido para estudante");
            return true;
        }
        else {
            console.log("Falha ao autenticar estudante");
            return false;
        }
    }
}
exports.TokenStudentService = TokenStudentService;
