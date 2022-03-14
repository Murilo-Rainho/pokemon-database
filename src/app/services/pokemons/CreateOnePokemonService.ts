import { CreateOnePokemonModel } from "../../models/pokemons";

import { PokemonRequest, PokemonResponse } from "../../interfaces/pokemons";

import { ErrorCatcher } from "../../utils/classes";

class CreateOnePokemonService {
  static async execute(
    pokemonData: PokemonRequest,
  ): Promise<ErrorCatcher | PokemonResponse> {
    const result = await CreateOnePokemonModel.execute(pokemonData);

    return result;
  }
}

export default CreateOnePokemonService;
