import { EditOneMovementModel } from "../../models/movements";

import { MovementRequest } from "../../interfaces/movements";

import { ErrorCatcher } from "../../utils/classes";

class EditOneMovementService {
  static async execute(id: string, typeData: MovementRequest) {
    const result = await EditOneMovementModel.execute(id, typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default EditOneMovementService;
