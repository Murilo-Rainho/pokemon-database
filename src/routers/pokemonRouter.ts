import { Router } from 'express';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
  GetPokemonByIdController,
} from '../app/controllers/pokemons';
import { VerifyTypeLazyLoad } from '../app/middlewares/pokemons';

const router = Router();

// get all pokemons
router.get(
  '/',
  VerifyTypeLazyLoad.handle,
  GetAllPokemonsController.handle,
);

// get one pokemon
router.get(
  '/:id',
  VerifyTypeLazyLoad.handle,
  GetPokemonByIdController.handle
);

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

// edit one pokemon
router.put('/:id', EditOnePokemonController.handle);

// delete one pokemon
router.delete('/:id', DeleteOnePokemonController.handle);

export default router;
