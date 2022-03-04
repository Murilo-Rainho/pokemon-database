import { GetAllTypesModel } from "../../models/types";

import { Type } from "../../database/entities";

class GetAllTypesService {
  static async execute(): Promise<Type[]> {
    const result = await GetAllTypesModel.execute();

    return result;
  }
}

export default GetAllTypesService;
