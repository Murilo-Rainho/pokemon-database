import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

class DeleteOneTypeModel {
  static async execute(id: string): Promise<void | Error> {
    const repo = getRepository(Type);

    const existType = await repo.findOne(id);

    if (!existType) {
      return new Error('Type does not exists');
    }

    await repo.delete(id);
  };
}

export default DeleteOneTypeModel;
