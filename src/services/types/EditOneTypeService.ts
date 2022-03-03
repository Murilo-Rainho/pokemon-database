import { EditOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

class EditOneTypeService {
  static async execute(id: string, typeData: TypeRequest) {
    const result = await EditOneTypeModel.execute(id, typeData);

    if (result instanceof Error) {
      return new Error(result.message);
    }

    return result;
  }
}

export default EditOneTypeService;
