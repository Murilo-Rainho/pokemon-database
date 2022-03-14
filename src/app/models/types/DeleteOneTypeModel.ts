import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class DeleteOneTypeModel {
  static async execute(id: string): Promise<void | ErrorCatcher> {
    const repo = getRepository(Type);

    const existType = await repo.findOne(id);

    if (!existType) {
      return new ErrorCatcher('Type does not exists', StatusCode.NotFound);
    }

    await repo.delete(id);
  };
}

export default DeleteOneTypeModel;
