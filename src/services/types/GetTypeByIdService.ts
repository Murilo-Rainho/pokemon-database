import { GetTypeByIdModel } from "../../models/types";

import { Type } from "../../database/entities";

import { ErrorCatcher } from "../../utils/classes";

class GetTypeByIdService {
  static async execute(
    id: string,
    includePokemons: boolean,
  ): Promise<Type | ErrorCatcher> {
    const result = await GetTypeByIdModel.execute(id, includePokemons);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default GetTypeByIdService;
