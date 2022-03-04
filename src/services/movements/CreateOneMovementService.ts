import { CreateOneMovementModel } from "../../models/movements";

import { MovementRequest } from "../../interfaces/movements";

import { ErrorCatcher } from "../../utils/classes";
import { Movement } from "../../database/entities";

class CreateOneMovementService {
  static async execute(
    movementData: MovementRequest,
  ): Promise<ErrorCatcher | Movement> {
    const result = await CreateOneMovementModel.execute(movementData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default CreateOneMovementService;
