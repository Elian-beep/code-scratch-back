import jwt from "jsonwebtoken";
require("dotenv").config();

export class CheckTokenStudentService{
    async generate(token: string){
        try{
            const secret = process.env.SECRET_STUDENT;
            jwt.verify(token, secret);
        }catch(error){
            return new Error(`Token inválido: ${error}`);
        }
    }
}