import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStudent1691715921842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "student",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "name",
                        type: "varchar",
                    },{
                        name: "user",
                        type: "varchar"
                    },{
                        name: "cpf",
                        type: "varchar"
                    },{
                        name: "email",
                        type: "varchar"
                    },{
                        name: "birthday",
                        type: "timestamp",
                    },{
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student");
    }

}
