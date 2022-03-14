import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class EditOneTypeModel {
  static async execute(
    id: string,
    { type, hexColor }: TypeRequest,
  ): Promise<Type | ErrorCatcher> {
    const repo = getRepository(Type);

    const existType = await repo.findOne(id);
    if (!existType) {
      return new ErrorCatcher('Type does not exists', StatusCode.NotFound);
    }

    existType.hex_color = (hexColor) ? hexColor : existType.hex_color;
    existType.type = (type) ? type : existType.type;

    await repo.save(existType);

    return existType;
  };
}

export default EditOneTypeModel;
