import { getRepository } from 'typeorm';

import { Pokemon } from '../../database/entities';

import { PokemonResponse } from '../../interfaces/pokemons';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class GetPokemonByIdModel {
  static async execute(
    id: string,
    includeType: boolean,
  ): Promise<PokemonResponse | ErrorCatcher> {
    const repo = getRepository(Pokemon);

    const existPokemon = await repo.findOne(id);

    if (!existPokemon) {
      return new ErrorCatcher('Has no pokemon with this id', StatusCode.NotFound);
    }

    if (!includeType) {
      return existPokemon;
    }

    const types = await existPokemon.types;

    return {
      id: existPokemon.id,
      name: existPokemon.name,
      height: existPokemon.height,
      weight: existPokemon.weight,
      types,
    };
  };
}

export default GetPokemonByIdModel;
