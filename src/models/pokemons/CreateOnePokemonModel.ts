import { getRepository } from 'typeorm';

import { Pokemon, Type } from '../../database/entities';
import { PokemonRequest } from '../../interfaces/pokemons';

class CreateOnePokemonModel {
  static async execute(
    { name, weight, height, typesId }: PokemonRequest,
  ): Promise<Pokemon> {
    const pokemonRepo = getRepository(Pokemon);
    const typeRepo = getRepository(Type);

    const allTypes = Promise.all(typesId.map(
      (typeId) => typeRepo.findOne(typeId),
    ));

    const createdPokemon = pokemonRepo.create({
      name, weight, height, types: allTypes,
    });

    return createdPokemon;
  }
}

export default CreateOnePokemonModel;
