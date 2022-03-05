import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { StatusCode } from '../../utils/enums';

import { GetAllTypesService } from '../../services/types';

class GetAllTypesController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type[]> | void> {
    try {
      const { includePokemons } = req.query;

      const booleanIncludePokemons = (includePokemons === 'true') ? true : false;

      const result = await GetAllTypesService.execute(booleanIncludePokemons);

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllTypesController;
