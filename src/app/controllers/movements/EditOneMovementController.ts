import { NextFunction, Request, Response } from 'express';

import { Movement } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';
import { MovementRequest } from '../../interfaces/movements';

import { EditOneMovementService } from '../../services/movements';

class EditOneMovementController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Movement | ErrorObject> | void> {
    try {
      const { id } = req.params;

      const movementData = req.body as MovementRequest;

      const result = await EditOneMovementService.execute(id, movementData);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default EditOneMovementController;
