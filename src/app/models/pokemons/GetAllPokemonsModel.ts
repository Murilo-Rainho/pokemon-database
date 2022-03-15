import Repository from '../../database/repositories';

import { Pokemon } from '../../database/entities';

import { PokemonResponse } from '../../interfaces/pokemons';

class GetAllPokemonsModel {
  private repo = new Repository('Pokemon');

  async execute(
    includeType: boolean,
  ): Promise<PokemonResponse[]> {
    const allPokemons = await this.repo.find();

    if (!includeType) {
      return allPokemons;
    }

    const allTypes = await Promise.all(allPokemons.map((pokemon) => (
      pokemon.types
    )));

    const result = allPokemons.map((pokemon, index) => (
      {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: allTypes[index],
      }
    ));

    return result;
  };
}

export default GetAllPokemonsModel;
