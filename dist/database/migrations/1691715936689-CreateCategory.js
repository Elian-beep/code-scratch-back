"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategory1691715936689 = void 0;
const typeorm_1 = require("typeorm");
class CreateCategory1691715936689 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "category",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "description",
                    type: "varchar"
                }, {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }, {
                    name: "order",
                    type: "bigint",
                    isUnique: true
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("category");
    }
}
exports.CreateCategory1691715936689 = CreateCategory1691715936689;
