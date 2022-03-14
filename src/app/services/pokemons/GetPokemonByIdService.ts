import { GetPokemonByIdModel } from "../../models/pokemons";

import { ErrorCatcher } from "../../utils/classes";

import { PokemonResponse } from "../../interfaces/pokemons";

class GetPokemonByIdService {
  static async execute(
    id: string,
    includeType: boolean,
  ): Promise<PokemonResponse | ErrorCatcher> {
    const result = await GetPokemonByIdModel.execute(id, includeType);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default GetPokemonByIdService;
