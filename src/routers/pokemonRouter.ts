import { NextFunction, Request, Response, Router } from 'express';

import { PokemonResponse } from '../app/interfaces/pokemons';
import { ErrorObject } from '../app/interfaces/utils';
import ControllerResponse from '../app/interfaces/utils/ControllerResponse';

import { VerifyTypeLazyLoad } from '../app/middlewares/pokemons';
import { ErrorCatcher } from '../app/utils/classes';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
  GetPokemonByIdController,
} from '../app/controllers/pokemons';

const router = Router();

const verifyTypeLazyLoad = new VerifyTypeLazyLoad();
const getAllPokemonsController = new GetAllPokemonsController();

// get all pokemons
router.get(
  '/',
  (req: Request, _res: Response, next: NextFunction): void => {
    const result = verifyTypeLazyLoad.handle(req.query);

    if (!result) return next();

    return next(result);
  },
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ErrorObject | ControllerResponse<PokemonResponse[]>> | void> => {
    const result = await getAllPokemonsController.handle(req.query);

    if (result instanceof ErrorCatcher) {
      return next(result);
    }

    return res.status(result.httpStatusCode).json(result);
  },
);

// get one pokemon
router.get(
  '/:id',
  (req: Request, _res: Response, next: NextFunction): void => {
    const result = verifyTypeLazyLoad.handle(req.query);

    if (!result) return next();

    return next(result);
  },
  GetPokemonByIdController.handle
);

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

// edit one pokemon
router.put('/:id', EditOnePokemonController.handle);

// delete one pokemon
router.delete('/:id', DeleteOnePokemonController.handle);

export default router;
