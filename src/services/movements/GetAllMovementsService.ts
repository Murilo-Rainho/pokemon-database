import { GetAllMovementsModel } from "../../models/movements";

import { Movement } from "../../database/entities";

class GetAllMovementsService {
  static async execute(
    includeType: boolean,
  ): Promise<Movement[]> {
    const result = await GetAllMovementsModel.execute(includeType);

    return result;
  }
}

export default GetAllMovementsService;
