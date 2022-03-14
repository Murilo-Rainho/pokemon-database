import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { PokemonRequest } from '../../interfaces/pokemons';
import { ErrorObject } from '../../interfaces/utils';

import { EditOnePokemonService } from '../../services/pokemons';

import { StatusCode } from '../../utils/enums';
import { ErrorCatcher } from '../../utils/classes';

class EditOnePokemonController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type | ErrorObject> | void> {
    try {
      const { id: pokemonId } = req.params;
      const pokemonData = req.body as PokemonRequest;

      const result = await EditOnePokemonService.execute(pokemonId, pokemonData);

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default EditOnePokemonController;
