import { connectionSource } from "../../database/ormconfig";
import bcrypt from 'bcrypt';
import { TokenStudentService } from "./TokenStudentService";
import { Student } from "../../entities/Student";
import { TDataAuth } from "../../types/TDataAuth";
import { Instructor } from "../../entities/Instructor";

export class AuthStudentService{
    async execute({ user, password }: TDataAuth){
        const repo = connectionSource.getRepository(Student);
        const student = await repo.findOne({ where: {user} });

        if(!student) return new Error("Nome de usuário ou senha incorretos");

        const realPassword = await bcrypt.compare(password, student.password) ? true : false;

        if(!realPassword) return new Error("Erro na autenticação de estudante");

        const tokenService = new TokenStudentService();
        const token = await tokenService.generate(student.id);
        return {
            token,
            student: {
                id: student.id,
                name: student.name,
                user: student.user,
                email: student.email,
                cpf: student.cpf,
                birthday: student.birthday
            }
        };
    }
}