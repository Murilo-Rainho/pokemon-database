import { getRepository } from 'typeorm';

import { Pokemon } from '../../database/entities';

class GetAllPokemonsModel {
  static async execute(
    includeType: boolean,
  ): Promise<Pokemon[]> {
    const repo = getRepository(Pokemon);

    const allPokemons = await repo.find();

    return allPokemons;
  };
}

export default GetAllPokemonsModel;
