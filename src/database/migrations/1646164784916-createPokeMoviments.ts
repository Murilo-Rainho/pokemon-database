import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createPokeMoviments1646164784916 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'movements',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
					},
					{
						name: 'movement',
						type: 'varchar(50)',
					},
					{
						name: 'power',
						type: 'tinyint'
					},
					{
						name: 'description',
						type: 'text',
					},
					{
						name: 'type_id',
						type: 'varchar'
					}
				],
			}),
		);

		await queryRunner.createForeignKey(
			'movements',
			new TableForeignKey({
				columnNames: ['type_id'],
				referencedTableName: 'types',
				referencedColumnNames: ['id'],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('movements');
	}

}
