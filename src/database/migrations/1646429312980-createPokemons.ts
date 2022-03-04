import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPokemons1646429312980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'pokemons',
					columns: [
						{
							name: 'id',
							type: 'varchar',
							isPrimary: true,
							generationStrategy: 'uuid',
						},
						{
							name: 'name',
							type: 'varchar(30)',
						},
						{
							// in kg (kilograms)
							name: 'weight',
							type: 'mediumint'
						},
						{
							// in m (meters)
							name: 'height',
							type: 'tinyint',
						},
					],
				}),
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('pokemons');
    }

}
