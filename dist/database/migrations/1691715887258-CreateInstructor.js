"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstructor1691715887258 = void 0;
const typeorm_1 = require("typeorm");
class CreateInstructor1691715887258 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "instructor",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "name",
                    type: "varchar"
                }, {
                    name: "user",
                    type: "varchar",
                    isUnique: true
                }, {
                    name: "password",
                    type: "varchar"
                }, {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("instructor");
    }
}
exports.CreateInstructor1691715887258 = CreateInstructor1691715887258;
