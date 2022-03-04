import { GetAllMovementsModel } from "../../models/movements";

class GetAllMovementsService {
  static async execute() {
    const result = await GetAllMovementsModel.execute();

    return result;
  }
}

export default GetAllMovementsService;
