import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategory1691715936689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "category",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "description",
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
        await queryRunner.dropTable("category");
    }

}
