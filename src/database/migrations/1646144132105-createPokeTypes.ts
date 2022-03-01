import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPokeTypes1646141745118 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'types',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
					},
					{
						name: 'type',
						type: 'varchar(20)',
						isUnique: true,
					},
					{
						name: 'hex_color',
						type: 'char(7)',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('types');
	}

}
