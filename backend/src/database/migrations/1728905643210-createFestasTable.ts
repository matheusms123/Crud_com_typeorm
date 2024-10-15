import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFestasTable1728905643210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "festas",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy: "increment",
                        isUnique: true
                    },
                    {
                        name: "party_name",
                        type: "varchar",
                        isNullable: false,
                        length: "100",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "party_date",
                        type: "varchar"
                    },
                    {
                        name: "criador",
                        type: "string",
                    }
                ],
                foreignKeys: [
                    {
                        name: "dona_festa",
                        columnNames:["criador"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }
 
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("festas")
    }

}
