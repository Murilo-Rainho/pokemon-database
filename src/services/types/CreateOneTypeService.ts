import { CreateOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

class CreateOneTypeService {
  static async execute(typeData: TypeRequest) {
    const result = await CreateOneTypeModel.execute(typeData);

    if (result instanceof Error) {
      return new Error(result.message);
    }

    return result;
  }
}

export default CreateOneTypeService;
