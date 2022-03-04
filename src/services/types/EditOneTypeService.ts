import { EditOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

import { Type } from "../../database/entities";

import { ErrorCatcher } from "../../utils/classes";

class EditOneTypeService {
  static async execute(
    id: string,
    typeData: TypeRequest,
  ): Promise<ErrorCatcher | Type> {
    const result = await EditOneTypeModel.execute(id, typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default EditOneTypeService;
