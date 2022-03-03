import { GetAllTypesModel } from "../../models/types";

class GetAllTypesService {
  static async execute() {
    const result = await GetAllTypesModel.execute();

    return result;
  }
}

export default GetAllTypesService;
