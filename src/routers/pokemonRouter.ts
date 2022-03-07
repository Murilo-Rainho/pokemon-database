import { Router } from 'express';

import {
  CreateOnePokemonController,
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

export default router;
