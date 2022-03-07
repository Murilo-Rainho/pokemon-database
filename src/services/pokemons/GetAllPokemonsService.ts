import { GetAllPokemonsModel } from "../../models/pokemons";

import { Pokemon } from "../../database/entities";

class GetAllPokemonsService {
  static async execute(
    // includeTypes: boolean,
  ): Promise<Pokemon[]> {
    const result = await GetAllPokemonsModel.execute();

    return result;
  }
}

export default GetAllPokemonsService;
