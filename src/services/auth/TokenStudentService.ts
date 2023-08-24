import jwt from "jsonwebtoken";
require("dotenv").config();

export class TokenStudentService{
    async generate(id_user: string): Promise<String | Error>{
        const secret = process.env.SECRET_STUDENT;
        const token = jwt.sign(
            {
                id: id_user
            },
            secret,
            {
                expiresIn: 3600
            }
        );

        return token;
    }

    check(token: string){
        if(!token) return new Error("Acesso negado");

        const secret = process.env.SECRET_STUDENT;
        jwt.verify(token, secret);
        console.log("Token válido para estudante");
        return true;
    }
}