import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

// there are two ways to create a foreign key

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

				// way One to create a fk:
				// foreignKeys: [
				// 	{
				// 		name: 'fk_type_movement',
				// 		columnNames: ['type_id'],
				// 		referencedTableName: 'types',
				// 		referencedColumnNames: ['id'],
				// 	}
				// ],
			}),
		);

		// way Two to create a fk:
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
