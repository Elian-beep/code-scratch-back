"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInstructorService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class TokenInstructorService {
    async generate(id_user) {
        const secret = process.env.SECRET_INSTRUCTOR;
        const token = jsonwebtoken_1.default.sign({
            id: id_user
        }, secret, {
            expiresIn: 3600
            // expiresIn: 30
        });
        return token;
    }
    check(token) {
        if (!token)
            return new Error("Acesso negado");
        const secret = process.env.SECRET_INSTRUCTOR;
        jsonwebtoken_1.default.verify(token, secret);
        console.log("Token válido para instrutor");
        return true;
    }
}
exports.TokenInstructorService = TokenInstructorService;
