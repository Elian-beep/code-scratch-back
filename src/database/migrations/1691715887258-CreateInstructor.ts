import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateInstructor1691715887258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "instructor",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "name",
                        type: "varchar"
                    },{
                        name: "user",
                        type: "varchar",
                        isUnique: true
                    },{
                        name: "password",
                        type: "varchar"
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
        await queryRunner.dropTable("instructor");
    }

}
