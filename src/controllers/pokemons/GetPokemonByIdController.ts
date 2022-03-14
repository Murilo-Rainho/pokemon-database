import { NextFunction, Request, Response } from 'express';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';
import { PokemonResponse } from '../../interfaces/pokemons';

import { GetPokemonByIdService } from '../../services/pokemons';

class GetPokemonByIdController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<PokemonResponse | ErrorObject> | void> {
    try {
      const { id } = req.params;

      const { includeType } = req.query;

      const booleanIncludeType = (includeType === 'true') ? true : false;

      const result = await GetPokemonByIdService.execute(id, booleanIncludeType);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetPokemonByIdController;
