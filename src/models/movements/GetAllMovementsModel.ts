import { getRepository } from 'typeorm';

import { Movement } from '../../database/entities';

class GetAllMovementsModel {
  static async execute(): Promise<Movement[]> {
    const repo = getRepository(Movement);

    const allMovements = await repo.find();
    return allMovements;
  };
}

export default GetAllMovementsModel;
