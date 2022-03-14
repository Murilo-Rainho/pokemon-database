import { NextFunction, Request, Response } from 'express';

import { Pokemon } from '../../database/entities';

import { StatusCode } from '../../utils/enums';

import { GetAllPokemonsService } from '../../services/pokemons';

class GetAllPokemonsController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Pokemon[]> | void> {
    try {
      const { includeType } = req.query;

      const booleanIncludeType = (includeType === 'true') ? true : false;

      const result = await GetAllPokemonsService.execute(booleanIncludeType);

      return res.status(StatusCode.Ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllPokemonsController;