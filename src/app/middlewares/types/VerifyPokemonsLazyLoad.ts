import { NextFunction, Request, Response } from 'express';

import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';

class VerifyPokemonsLazyLoad {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ErrorObject> | void> {
    try {
      const { includePokemons } = req.query;

      const errorObject: ErrorObject = {
        message: 'query \'includePokemons\' only accepts \'true\' or \'false\'',
      }

      if (includePokemons === undefined || includePokemons.length === 0) {
        return next();
      }

      if (!includePokemons.toString().match(/^(true|false)$/i)) {
        return res.status(StatusCode.BadRequest).json(errorObject);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default VerifyPokemonsLazyLoad;
