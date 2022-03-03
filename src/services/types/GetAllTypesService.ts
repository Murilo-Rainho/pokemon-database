import { GetAllTypesModel } from "../../models/types";

class GetAllTypesService {
  static async execute() {
    const allTypes = await GetAllTypesModel.execute();

    return allTypes;
  }
}

export default GetAllTypesService;
