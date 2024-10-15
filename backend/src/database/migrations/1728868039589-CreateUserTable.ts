import { MigrationInterface, QueryRunner,Table } from "typeorm";
import { takeCoverage } from "v8";

export class CreateUserTable1728868039589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        generationStrategy: "increment",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        length: "100"
                    },

                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        length:"100",
                        
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                        length: "100"
                    },
                    {
                        name: "suas_festas",
                        type: "int"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
