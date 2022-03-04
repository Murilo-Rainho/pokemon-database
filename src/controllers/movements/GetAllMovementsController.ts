import { NextFunction, Request, Response } from 'express';

import { Movement } from '../../database/entities';

import { StatusCode } from '../../utils/enums';

import { GetAllMovementsService } from '../../services/movements';

class GetAllMovementsController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Movement[]> | void> {
    try {
      const { includeType } = req.query;

      const booleanIncludeType = (includeType === 'true') ? true : false;

      const result = await GetAllMovementsService.execute(booleanIncludeType);

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllMovementsController;
