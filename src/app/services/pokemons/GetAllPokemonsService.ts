import { GetAllPokemonsModel } from "../../models/pokemons";

import { PokemonResponse } from "../../interfaces/pokemons";

class GetAllPokemonsService {
  private getAllPokemonsModel = new GetAllPokemonsModel();

  async execute(
    includeType: boolean,
  ): Promise<PokemonResponse[]> {
    const result = await this.getAllPokemonsModel.execute(includeType);

    return result;
  }
}

export default GetAllPokemonsService;
