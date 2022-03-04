import { DeleteOneTypeModel } from "../../models/types";

class DeleteOneTypeService {
  static async execute(id: string) {
    const result = await DeleteOneTypeModel.execute(id);

    if (result instanceof Error) {
      return new Error(result.message);
    }
  }
}

export default DeleteOneTypeService;
