import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPokemonsTypesIntermediary1646430459898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'types_pokemons_pokemons',
					columns: [
						{
							name: 'pokemonsId',
							type: 'varchar',
							isPrimary: true,
							generationStrategy: 'uuid',
						},
						{
							name: 'typesId',
							type: 'varchar',
							isPrimary: true,
							generationStrategy: 'uuid',
						},
					],
					foreignKeys: [
						{
							columnNames: ['pokemonsId'],
							referencedColumnNames: ['id'],
							referencedTableName: 'pokemons',
						},
						{
							columnNames: ['typesId'],
							referencedColumnNames: ['id'],
							referencedTableName: 'types',
						},
					],
				}),
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('types_pokemons_pokemons');
    }

}
