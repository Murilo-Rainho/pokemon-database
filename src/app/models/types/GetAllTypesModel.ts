import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

class GetAllTypesModel {
  static async execute(
    includePokemons: boolean,
  ): Promise<Type[]> {
    const repo = getRepository(Type);

    const allTypes = await repo.find();

    return allTypes;
  };
}

export default GetAllTypesModel;
