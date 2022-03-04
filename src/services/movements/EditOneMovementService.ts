import { EditOneMovementModel } from "../../models/movements";

import { MovementRequest } from "../../interfaces/movements";

import { Movement } from "../../database/entities";

import { ErrorCatcher } from "../../utils/classes";

class EditOneMovementService {
  static async execute(
    id: string,
    typeData: MovementRequest,
  ): Promise<ErrorCatcher | Movement> {
    const result = await EditOneMovementModel.execute(id, typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default EditOneMovementService;
