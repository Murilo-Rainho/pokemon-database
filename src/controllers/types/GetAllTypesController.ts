import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { StatusCode } from '../../enums';

import { GetAllTypesService } from '../../services/types';

class GetAllTypesController {
  static async handle(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type[]> | void> {
    try {
      const result = await GetAllTypesService.execute();

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllTypesController;
