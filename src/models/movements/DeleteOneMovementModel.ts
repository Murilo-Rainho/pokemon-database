import { getRepository } from 'typeorm';

import { Movement } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class DeleteOneMovementModel {
  static async execute(id: string): Promise<void | ErrorCatcher> {
    const repo = getRepository(Movement);

    const existMovement = await repo.findOne(id);

    if (!existMovement) {
      return new ErrorCatcher('Movement does not exists', StatusCode.NotFound);
    }

    await repo.delete(id);
  };
}

export default DeleteOneMovementModel;
