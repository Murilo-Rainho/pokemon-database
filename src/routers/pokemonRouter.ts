import { NextFunction, Request, Response, Router } from 'express';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
  GetPokemonByIdController,
} from '../app/controllers/pokemons';

import { VerifyTypeLazyLoad } from '../app/middlewares/pokemons';

const router = Router();

const verifyTypeLazyLoad = new VerifyTypeLazyLoad();

// get all pokemons
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    const result = verifyTypeLazyLoad.handle(req.query);

    if (!result) return next();

    return res.status(result.httpStatusCode).json(result.message)
  },
  GetAllPokemonsController.handle,
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
