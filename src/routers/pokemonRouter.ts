import { NextFunction, Request, Response, Router } from 'express';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
  GetPokemonByIdController,
} from '../app/controllers/pokemons';

import { VerifyTypeLazyLoad } from '../app/middlewares/pokemons';
import { ErrorCatcher } from '../app/utils/classes';

const router = Router();

const verifyTypeLazyLoad = new VerifyTypeLazyLoad();
const getAllPokemonsController = new GetAllPokemonsController();

// get all pokemons
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    const result = verifyTypeLazyLoad.handle(req.query);

    if (!result) return next();

    return next(result);
  },
  async (req: Request, res: Response, next: NextFunction) => {
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
  (req: Request, res: Response, next: NextFunction) => {
    const result = verifyTypeLazyLoad.handle(req.query);

    if (!result) return next();

    return res.status(result.httpStatusCode).json(result.message)
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
