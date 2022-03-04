import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPokemonsTypesIntermediary1646430459898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'pokemons_types',
					columns: [
						{
							name: 'pokemon_id',
							type: 'varchar',
							isPrimary: true,
							generationStrategy: 'uuid',
						},
						{
							name: 'type_id',
							type: 'varchar',
							isPrimary: true,
							generationStrategy: 'uuid',
						},
					],
					foreignKeys: [
						{
							columnNames: ['pokemon_id'],
							referencedColumnNames: ['id'],
							referencedTableName: 'pokemons',
						},
						{
							columnNames: ['type_id'],
							referencedColumnNames: ['id'],
							referencedTableName: 'types',
						},
					],
				}),
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('pokemons_types');
    }

}
