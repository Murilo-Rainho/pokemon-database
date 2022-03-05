import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class GetTypeByIdModes {
  static async execute(
    id: string,
    includePokemons: boolean,
  ): Promise<Type | ErrorCatcher> {
    const repo = getRepository(Type);

    const existType = await repo.findOne(id);

    if (!existType) {
      return new ErrorCatcher('Has no type with this id', StatusCode.NotFound);
    }

    return existType;
  };
}

export default GetTypeByIdModes;
