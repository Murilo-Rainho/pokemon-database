import { GetPokemonByIdModel } from "../../models/pokemons";

import { Pokemon } from "../../database/entities";

import { ErrorCatcher } from "../../utils/classes";

class GetPokemonByIdService {
  static async execute(
    id: string,
  ): Promise<Pokemon | ErrorCatcher> {
    const result = await GetPokemonByIdModel.execute(id);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default GetPokemonByIdService;
