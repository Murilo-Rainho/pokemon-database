import { CreateOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

import { Type } from "../../database/entities";

import { ErrorCatcher } from "../../utils/classes";

class CreateOneTypeService {
  static async execute(
    typeData: TypeRequest,
  ): Promise<ErrorCatcher | Type> {
    const result = await CreateOneTypeModel.execute(typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default CreateOneTypeService;
