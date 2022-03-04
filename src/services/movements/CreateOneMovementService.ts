import { CreateOneMovementModel } from "../../models/movements";

import { MovementRequest } from "../../interfaces/movements";
import { ErrorCatcher } from "../../utils";

class CreateOneMovementService {
  static async execute(movementData: MovementRequest) {
    const result = await CreateOneMovementModel.execute(movementData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default CreateOneMovementService;
