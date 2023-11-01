import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStudentClassroom1696960443516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "student_classroom",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "student_id",
                        type: "varchar"
                    },{
                        name: "classroom_id",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student_classroom")
    }

}
