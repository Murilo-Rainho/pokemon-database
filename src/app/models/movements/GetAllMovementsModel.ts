import { getRepository } from 'typeorm';

import { Movement } from '../../database/entities';

class GetAllMovementsModel {
  static async execute(includeType: boolean): Promise<Movement[]> {
    const repo = getRepository(Movement);

    const lazyLoad = (includeType) ? ['type'] : [];

    const allMovements = await repo.find({ relations: lazyLoad });
    return allMovements;
  };
}

export default GetAllMovementsModel;
