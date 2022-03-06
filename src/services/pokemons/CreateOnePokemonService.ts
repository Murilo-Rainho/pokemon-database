import { CreateOnePokemonModel } from "../../models/pokemons";

import { PokemonRequest } from "../../interfaces/pokemons";

import { Pokemon } from "../../database/entities";

class CreateOnePokemonService {
  static async execute(
    pokemonData: PokemonRequest,
  ): Promise<Pokemon> {
    const result = await CreateOnePokemonModel.execute(pokemonData);

    return result;
  }
}

export default CreateOnePokemonService;
