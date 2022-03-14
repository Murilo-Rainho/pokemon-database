import { getRepository } from 'typeorm';

import { Movement, Type } from '../../database/entities';

import { MovementRequest } from '../../interfaces/movements';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class EditOneMovementModel {
  static async execute(
    id: string,
    { typeId, description, movement, power }: MovementRequest,
  ): Promise<Movement | ErrorCatcher> {
    const movementRepo = getRepository(Movement);
    const typeRepo = getRepository(Type);

    const existType = await typeRepo.findOne(typeId);
    if (!existType) {
      return new ErrorCatcher('Has no type with this \'typeId\'', StatusCode.NotFound);
    }

    const existMovement = await movementRepo.findOne(id);
    if (!existMovement) {
      return new ErrorCatcher('Movement does not exists', StatusCode.NotFound);
    }

    existMovement.type_id = (typeId) ? typeId : existMovement.type_id;
    existMovement.description = (description) ? description : existMovement.description;
    existMovement.movement = (movement) ? movement : existMovement.movement;
    existMovement.power = (power) ? power : existMovement.power;

    await movementRepo.save(existMovement);

    return existMovement;
  };
}

export default EditOneMovementModel;
