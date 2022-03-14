import { DeleteOneTypeModel } from "../../models/types";

import { ErrorCatcher } from "../../utils/classes";

class DeleteOneTypeService {
  static async execute(
    id: string,
  ): Promise<ErrorCatcher | void> {
    const result = await DeleteOneTypeModel.execute(id);

    if (result instanceof ErrorCatcher) {
      return result;
    }
  }
}

export default DeleteOneTypeService;
