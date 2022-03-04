import { NextFunction, Request, Response } from 'express';

import { Movement } from '../../database/entities';

import { StatusCode } from '../../enums';

import { GetAllMovementsService } from '../../services/movements';

class GetAllMovementsController {
  static async handle(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Movement[]> | void> {
    try {
      const result = await GetAllMovementsService.execute();

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllMovementsController;
