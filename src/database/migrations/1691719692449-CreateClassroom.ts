import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateClassroom1691719692449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "classroom",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "title",
                        type: "varchar",
                    },{
                        name: "description",
                        type: "varchar",
                    },{
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },{
                        name: "instructor_id",
                        type: "uuid",
                    },{
                        name: "link_video",
                        type: "varchar"
                    },{
                        name: "category_id",
                        type: "uuid",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_classroom_instructor",
                        columnNames: ["instructor_id"],
                        referencedTableName: "instructor",
                        referencedColumnNames: ["id"]
                    },{
                        name: "fk_classroom_category",
                        columnNames: ["category_id"],
                        referencedTableName: "category",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classroom");
    }

}
