import { Router } from 'express';

import {
  CreateOnePokemonController,
  GetAllPokemonsController,
} from '../controllers/pokemons';

const router = Router();

// get all pokemons
router.get('/', GetAllPokemonsController.handle);

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

export default router;
