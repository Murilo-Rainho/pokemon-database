import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class CreateOneTypeModel {
  static async execute(
    { type, hexColor }: TypeRequest,
  ): Promise<Type | ErrorCatcher> {
    const repo = getRepository(Type);

    const existType = await repo.findOne({ type });
    if (existType) {
      return new ErrorCatcher('Type already exists', StatusCode.Conflict);
    }

    const createdType = repo.create({ type, hex_color: hexColor });

    await repo.save(createdType);

    return createdType;
  };
}

export default CreateOneTypeModel;
