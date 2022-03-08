import { DeleteOnePokemonModel } from "../../models/pokemons";

import { ErrorCatcher } from "../../utils/classes";

class DeleteOnePokemonService {
  static async execute(
    id: string,
  ): Promise<ErrorCatcher | void> {
    const result = await DeleteOnePokemonModel.execute(id);

    if (result instanceof ErrorCatcher) {
      return result;
    }
  }
}

export default DeleteOnePokemonService;
