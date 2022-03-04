import { DeleteOneMovementModel } from "../../models/movements";

import { ErrorCatcher } from "../../utils/classes";

class DeleteOneMovementService {
  static async execute(
    id: string,
  ): Promise<ErrorCatcher | void> {
    const result = await DeleteOneMovementModel.execute(id);

    if (result instanceof ErrorCatcher) {
      return result;
    }
  }
}

export default DeleteOneMovementService;
