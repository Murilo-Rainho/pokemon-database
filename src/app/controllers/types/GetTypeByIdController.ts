import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';

import { GetTypeByIdService } from '../../services/types';

class GetTypeByIdController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type | ErrorObject> | void> {
    try {
      const { id } = req.params;

      const { includePokemons } = req.query;

      const booleanIncludePokemons = (includePokemons === 'true') ? true : false;

      const result = await GetTypeByIdService.execute(id, booleanIncludePokemons);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetTypeByIdController;
