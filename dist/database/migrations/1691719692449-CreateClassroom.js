"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroom1691719692449 = void 0;
const typeorm_1 = require("typeorm");
class CreateClassroom1691719692449 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "classroom",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "title",
                    type: "varchar",
                }, {
                    name: "description",
                    type: "varchar",
                }, {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }, {
                    name: "instructor_id",
                    type: "uuid",
                }, {
                    name: "link_video",
                    type: "varchar"
                }, {
                    name: "watched",
                    type: "boolean"
                }, {
                    name: "category_id",
                    type: "uuid",
                }, {
                    name: "order",
                    type: "bigint"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_classroom_instructor",
                    columnNames: ["instructor_id"],
                    referencedTableName: "instructor",
                    referencedColumnNames: ["id"]
                }, {
                    name: "fk_classroom_category",
                    columnNames: ["category_id"],
                    referencedTableName: "category",
                    referencedColumnNames: ["id"]
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("classroom");
    }
}
exports.CreateClassroom1691719692449 = CreateClassroom1691719692449;
