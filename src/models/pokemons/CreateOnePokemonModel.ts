import { getRepository } from 'typeorm';

import { Pokemon, Type, TypePokemonPokemon } from '../../database/entities';

import { PokemonRequest } from '../../interfaces/pokemons';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class CreateOnePokemonModel {
  static async execute(
    { name, weight, height, typesId }: PokemonRequest,
  ): Promise<Pokemon> {
    const pokemonRepo = getRepository(Pokemon);
    const typeRepo = getRepository(Type);
    const typePokemonPokemonRepo = getRepository(TypePokemonPokemon);

    const allTypes = Promise.all(typesId.map(
      (typeId) => typeRepo.findOne(typeId),
    ));

    const createdPokemon = pokemonRepo.create({
      name, weight, height, types: allTypes,
    });
    
    await pokemonRepo.save(createdPokemon);

    const typeAndPokemonIds = (await allTypes).map((pokeType) => {
      // if (!pokeType) {
      //   return new ErrorCatcher('any of the type ids sent are not valid', StatusCode.NotFound);
      // }

      return typePokemonPokemonRepo.create({
        typesId: pokeType.id,
        pokemonsId: createdPokemon.id,
      });
    });

    await Promise.all(typeAndPokemonIds.map((typeAndPokemonId) => (
      typePokemonPokemonRepo.save(typeAndPokemonId)
    )));

    return createdPokemon;
  }
}

export default CreateOnePokemonModel;
