import { getConnection, getRepository } from 'typeorm';

import { Pokemon, Type, TypePokemonPokemon } from '../../database/entities';

import { PokemonRequest, PokemonResponse } from '../../interfaces/pokemons';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class CreateOnePokemonModel {
  static async execute(
    { name, weight, height, typesId }: PokemonRequest,
  ): Promise<ErrorCatcher | PokemonResponse> {
    const pokemonRepo = getRepository(Pokemon);
    const typeRepo = getRepository(Type);
    const typePokemonPokemonRepo = getRepository(TypePokemonPokemon);

    const allTypes = Promise.all(typesId.map(
      (typeId) => typeRepo.findOne(typeId),
    ));
    
    const verifyTypes = (await allTypes).every((type) => type);

    if (!verifyTypes) {
      return new ErrorCatcher('Any of the \'typesId\' are invalid', StatusCode.NotFound);
    }

    const createdPokemon = pokemonRepo.create({
      name, weight, height, types: allTypes,
    });

    const typeAndPokemonIds = (await allTypes).map((pokeType) => {
      return typePokemonPokemonRepo.create({
        typesId: pokeType.id,
        pokemonsId: createdPokemon.id,
      });
    });

    await getConnection().transaction(async () => {
      await pokemonRepo.save(createdPokemon);

      await Promise.all(typeAndPokemonIds.map((typeAndPokemonId) => (
        typePokemonPokemonRepo.save(typeAndPokemonId)
      )));
    });

    const types = await createdPokemon.types;

    return {
      id: createdPokemon.id,
      weight: createdPokemon.weight,
      height: createdPokemon.height,
      name: createdPokemon.name,
      types,
    };
  }
}

export default CreateOnePokemonModel;
