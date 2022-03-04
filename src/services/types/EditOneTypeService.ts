import { EditOneTypeModel } from "../../models/types";

import { TypeRequest } from "../../interfaces/types";

import { ErrorCatcher } from "../../utils/classes";

class EditOneTypeService {
  static async execute(id: string, typeData: TypeRequest) {
    const result = await EditOneTypeModel.execute(id, typeData);

    if (result instanceof ErrorCatcher) {
      return result;
    }

    return result;
  }
}

export default EditOneTypeService;
