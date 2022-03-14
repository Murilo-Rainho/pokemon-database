import { NextFunction, Request, Response } from 'express';

import { Pokemon } from '../../database/entities';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';

import { GetPokemonByIdService } from '../../services/pokemons';

class GetPokemonByIdController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Pokemon | ErrorObject> | void> {
    try {
      const { id } = req.params;

      const result = await GetPokemonByIdService.execute(id);

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
