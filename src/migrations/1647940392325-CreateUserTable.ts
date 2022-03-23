import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1647940392325 implements MigrationInterface {
    name = 'CreateUserTable1647940392325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(60) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
