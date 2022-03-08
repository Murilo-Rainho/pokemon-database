import { Router } from 'express';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
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

// delete one pokemon
router.delete('/:id', DeleteOnePokemonController.handle);

export default router;
