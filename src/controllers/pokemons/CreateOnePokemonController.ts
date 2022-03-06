import { NextFunction, Request, Response } from 'express';

import { Pokemon } from '../../database/entities';

import { PokemonRequest } from '../../interfaces/pokemons';

import { CreateOnePokemonService } from '../../services/pokemons';

import { StatusCode } from '../../utils/enums';

class CreateOnePokemonController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Pokemon> | void> {
    try {
      const pokemonData = req.body as PokemonRequest;

      const result = await CreateOnePokemonService.execute(pokemonData);

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOnePokemonController;
