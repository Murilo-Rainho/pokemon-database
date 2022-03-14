import { GetAllPokemonsModel } from "../../models/pokemons";

import { Pokemon } from "../../database/entities";

class GetAllPokemonsService {
  static async execute(
    includeType: boolean,
  ): Promise<Pokemon[]> {
    const result = await GetAllPokemonsModel.execute(includeType);

    return result;
  }
}

export default GetAllPokemonsService;
