import { getRepository } from 'typeorm';

import { Pokemon, Type, TypePokemonPokemon } from '../../database/entities';

import { PokemonRequest, PokemonResponse } from '../../interfaces/pokemons';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class EditOnePokemonModel {
  static async execute(
    id: string,
    { name, height, typesId, weight }: PokemonRequest,
  ): Promise<PokemonResponse> {
    // =================================================================
    // create repositories
    const typePokemonPokemonRepo = getRepository(TypePokemonPokemon);
    const pokemonRepo = getRepository(Pokemon);
    const typeRepo = getRepository(Type);

    // =================================================================
    // delete elements in intermediary table type_pokemon_pokemon
    // and adding news elements
    await typePokemonPokemonRepo.delete({ pokemonsId: id });
    
    const updatedTypes = typesId.map((typeId) => (
      typePokemonPokemonRepo.create({
        pokemonsId: id,
        typesId: typeId,
      })
    ));

    await Promise.all(updatedTypes.map((updatedType) => (
      typePokemonPokemonRepo.save(updatedType)
    )));

    // =================================================================
    // find the pokemon by id, editing it and save in database
    const TYPES_IDS_ARRAY = typesId.map((typeId) => ({ id: typeId }));  
    const allTypes = await typeRepo.find({ where: TYPES_IDS_ARRAY });

    const existPokemon = await pokemonRepo.findOne(id);

    existPokemon.height = (height) ? height : existPokemon.height;
    existPokemon.name = (name) ? name : existPokemon.name;
    existPokemon.weight = (weight) ? weight : existPokemon.weight;

    existPokemon.types = (allTypes) ? Promise.resolve(allTypes) : existPokemon.types;

    await pokemonRepo.save(existPokemon);

    // =================================================================
    // There is no simple and easy way to do a lazy loading in the
    // typeorm, because of this, whenever you do it, a lot of the work
    // will be done by yourself and the code ends up being very long.
    // Source: https://github.com/typeorm/typeorm/issues/3703
    const types = await existPokemon.types;

    return {
      id: existPokemon.id,
      name: existPokemon.name,
      weight: existPokemon.weight,
      height: existPokemon.height,
      types,
    };
  };
}

export default EditOnePokemonModel;
