import { getRepository } from 'typeorm';

import { Movement, Type } from '../../database/entities';
import { StatusCode } from '../../enums';

import { MovementRequest } from '../../interfaces/movements';

import { ErrorCatcher } from '../../utils';

class CreateOneTypeModel {
  static async execute(
    { movement, power, description, typeId }: MovementRequest,
  ): Promise<Movement | ErrorCatcher> {
    const movementRepo = getRepository(Movement);
    const typeRepo = getRepository(Type);

    const existType = await typeRepo.findOne(typeId);
    if (!existType) {
      return new ErrorCatcher('Has no type with this id', StatusCode.NotFound);
    }

    const existMovement = await movementRepo.findOne({ movement });
    if (existMovement) {
      return new ErrorCatcher('Movement already exists', StatusCode.Conflict);
    }

    const createdMovement = movementRepo.create({
      movement, power, description, type_id: typeId,
    });

    await movementRepo.save(createdMovement);

    return createdMovement;
  };
}

export default CreateOneTypeModel;
