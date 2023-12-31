import { connectionSource } from "../../database/ormconfig"
import bcrypt from 'bcrypt';
import { TokenInstructorService } from "./TokenInstructorService";
import { Instructor } from "../../entities/Instructor";
import { TDataAuth } from "../../types/TDataAuth";

export class AuthInstructorService {
    async execute({ user, password }: TDataAuth) {
        const repo = connectionSource.getRepository(Instructor);
        const instructor = await repo.find({ where: { user } });

        if (!instructor) return new Error("Nome de usuário ou senha incorretos!")

        const realPassword = await bcrypt.compare(password, instructor[0].password) ? true : false;

        if (!realPassword)
            return new Error("Erro na autenticação");

        const tokenService = new TokenInstructorService();
        const token = tokenService.generate(instructor[0].id);
        return token;
    }
}