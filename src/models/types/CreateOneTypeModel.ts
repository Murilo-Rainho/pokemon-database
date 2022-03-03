import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';
import { TypeRequest } from '../../interfaces/types';

class CreateOneTypeModel {
  static async execute(
    { type, hexColor }: TypeRequest,
  ): Promise<Type | Error> {
    const repo = getRepository(Type);

    const existType = await repo.findOne({ type });
    if (existType) {
      return new Error('Type already exists');
    }

    const createdType = repo.create({ type, hex_color: hexColor });

    await repo.save(createdType);

    return createdType;
  };
}

export default CreateOneTypeModel;
