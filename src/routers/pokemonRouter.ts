import { Router } from 'express';

import {
  CreateOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
} from '../controllers/pokemons';
import { VerifyTypeLazyLoad } from '../middlewares/pokemons';

const router = Router();

// get all pokemons
router.get(
  '/',
  VerifyTypeLazyLoad.handle,
  GetAllPokemonsController.handle,
);

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

// edit one pokemon
router.put('/:id', EditOnePokemonController.handle);

export default router;
