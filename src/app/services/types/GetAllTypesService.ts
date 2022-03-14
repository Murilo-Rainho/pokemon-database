import { GetAllTypesModel } from "../../models/types";

import { Type } from "../../database/entities";

class GetAllTypesService {
  static async execute(
    includePokemons: boolean,
  ): Promise<Type[]> {
    const result = await GetAllTypesModel.execute(includePokemons);

    return result;
  }
}

export default GetAllTypesService;
