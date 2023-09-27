"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentService = void 0;
const ormconfig_1 = require("../../database/ormconfig");
const Student_1 = require("../../entities/Student");
class UpdateStudentService {
    async execute({ id, name, user, cpf, email, birthday, photo }) {
        const repo = ormconfig_1.connectionSource.getRepository(Student_1.Student);
        const student = await repo.findOne({ where: { id } });
        if (!student)
            return new Error("Aluna não encontrada");
        if (birthday) {
            const dateParts = birthday.split('/');
            const birthDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            student.birthday = birthday ? birthDate : student.birthday;
        }
        student.name = name ? name : student.name;
        student.user = user ? user : student.user;
        student.cpf = cpf ? cpf : student.cpf;
        student.email = email ? email : student.email;
        student.photo = photo ? photo : student.photo;
        await repo.save(student);
        return student;
    }
}
exports.UpdateStudentService = UpdateStudentService;
