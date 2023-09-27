"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudent1691715921842 = void 0;
const typeorm_1 = require("typeorm");
class CreateStudent1691715921842 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "student",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "name",
                    type: "varchar",
                }, {
                    name: "user",
                    type: "varchar"
                }, {
                    name: "cpf",
                    type: "varchar"
                }, {
                    name: "email",
                    type: "varchar"
                }, {
                    name: "password",
                    type: "varchar"
                }, {
                    name: "birthday",
                    type: "timestamp",
                }, {
                    name: "photo",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("student");
    }
}
exports.CreateStudent1691715921842 = CreateStudent1691715921842;
