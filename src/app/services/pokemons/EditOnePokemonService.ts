import { EditOnePokemonModel } from "../../models/pokemons";

import { PokemonRequest, PokemonResponse } from "../../interfaces/pokemons";

import { ErrorCatcher } from "../../utils/classes";

class EditOnePokemonService {
  static async execute(
    id: string,
    pokemonData: PokemonRequest,
  ): Promise<PokemonResponse> {
    const result = await EditOnePokemonModel.execute(id, pokemonData);

    return result;
  }
}

export default EditOnePokemonService;
