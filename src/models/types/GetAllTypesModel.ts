import { getRepository } from 'typeorm';

import { Type } from '../../database/entities/Types';

class GetAllTypesModel {
  static async execute(): Promise<Type[]> {
    const repo = getRepository(Type);

    const type = await repo.find();

    return type;
  };
}

export default GetAllTypesModel;
