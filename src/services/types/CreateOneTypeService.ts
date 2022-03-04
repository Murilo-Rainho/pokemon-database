import { CreateOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

import { ErrorCatcher } from "../../utils/classes";

class CreateOneTypeService {
  static async execute(typeData: TypeRequest) {
    const result = await CreateOneTypeModel.execute(typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default CreateOneTypeService;
