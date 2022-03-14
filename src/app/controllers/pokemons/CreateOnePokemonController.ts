import { NextFunction, Request, Response } from 'express';

import { Pokemon } from '../../database/entities';

import { PokemonRequest, PokemonResponse } from '../../interfaces/pokemons';

import { CreateOnePokemonService } from '../../services/pokemons';
import { ErrorCatcher } from '../../utils/classes';

import { StatusCode } from '../../utils/enums';

class CreateOnePokemonController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<PokemonResponse> | void> {
    try {
      const pokemonData = req.body as PokemonRequest;

      const result = await CreateOnePokemonService.execute(pokemonData);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message });
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOnePokemonController;
