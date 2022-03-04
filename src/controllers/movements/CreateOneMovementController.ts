import { NextFunction, Request, Response } from 'express';

import { Movement } from '../../database/entities';

import { StatusCode } from '../../utils/enums';

import { MovementRequest } from '../../interfaces/movements';

import { CreateOneMovementService } from '../../services/movements';

import { ErrorCatcher } from '../../utils/classes';

class CreateOneMovementController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Movement> | void> {
    try {
      const movementData = req.body as MovementRequest;

      const result = await CreateOneMovementService.execute(movementData);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOneMovementController;
