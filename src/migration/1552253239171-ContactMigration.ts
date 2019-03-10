import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ContactMigration1552253239171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createDatabase("addressBook",true);

        await queryRunner.createTable(new Table({
            name: "contact",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "first_name",
                    type: "varchar",
                    length:"50"
                },
                {
                    name: "last_name",
                    type: "varchar",
                    length:"50"
                },
                {
                    name: "phone",
                    type: "varchar",
                    length:"20"
                },
                {
                    name: "address",
                    type: "varchar",
                    length:"100"
                },
                {
                    name: "gender",
                    type: "varchar",
                    length:"10"
                }
            ]
        }), true)  

        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
