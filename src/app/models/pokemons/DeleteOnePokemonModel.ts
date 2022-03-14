import { getRepository } from 'typeorm';

import { Pokemon, TypePokemonPokemon } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class DeleteOnePokemonModel {
  static async execute(
    id: string,
  ): Promise<void | ErrorCatcher> {
    const pokemonRepo = getRepository(Pokemon);
    const typePokemonPokemonRepo = getRepository(TypePokemonPokemon);

    const existPokemon = await pokemonRepo.findOne(id);

    if (!existPokemon) {
      return new ErrorCatcher('Pokemon does not exists', StatusCode.NotFound);
    }

    await typePokemonPokemonRepo.delete({ pokemonsId: id });

    await pokemonRepo.delete(id);
  };
}

export default DeleteOnePokemonModel;
