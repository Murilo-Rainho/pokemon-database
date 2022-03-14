import { getRepository } from 'typeorm';

import { Pokemon } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class GetPokemonByIdModel {
  static async execute(
    id: string,
  ): Promise<Pokemon | ErrorCatcher> {
    const repo = getRepository(Pokemon);

    const existPokemon = await repo.findOne(id);

    if (!existPokemon) {
      return new ErrorCatcher('Has no pokemon with this id', StatusCode.NotFound);
    }

    return existPokemon;
  };
}

export default GetPokemonByIdModel;
