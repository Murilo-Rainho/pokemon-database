import { NextFunction, Request, Response } from 'express';

import { ErrorObject } from '../../interfaces/utils';

import { DeleteOnePokemonService } from '../../services/pokemons';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class DeleteOnePokemonController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ErrorObject | void> | void> {
    try {
      const { id } = req.params;

      const result = await DeleteOnePokemonService.execute(id);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.NoContent).send();
    } catch (error) {
      next(error);
    }
  }
}

export default DeleteOnePokemonController;
