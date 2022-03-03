import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';
import { TypeRequest } from '../../interfaces/types';

class EditOneTypeModel {
  static async execute(
    id: string,
    { type, hexColor }: TypeRequest,
  ): Promise<Type | Error> {
    const repo = getRepository(Type);

    const existType = await repo.findOne(id);
    if (!existType) {
      return new Error('Type does not exists');
    }

    existType.hex_color = (hexColor) ? hexColor : existType.hex_color;
    existType.type = (type) ? type : existType.type;

    await repo.save(existType);

    return existType;
  };
}

export default EditOneTypeModel;
