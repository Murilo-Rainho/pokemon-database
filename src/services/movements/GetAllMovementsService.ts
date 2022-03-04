import { GetAllMovementsModel } from "../../models/movements";

class GetAllMovementsService {
  static async execute(includeType: boolean) {
    const result = await GetAllMovementsModel.execute(includeType);

    return result;
  }
}

export default GetAllMovementsService;
