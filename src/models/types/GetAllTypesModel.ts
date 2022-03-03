import { getRepository } from 'typeorm';

import { Type } from '../../database/entities/Types';

class GetAllTypesModel {
  static async execute(): Promise<Type[]> {
    const repo = getRepository(Type);

    const allTypes = await repo.find();

    return allTypes;
  };
}

export default GetAllTypesModel;
