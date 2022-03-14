import { Router } from 'express';

import {
  CreateOnePokemonController,
  DeleteOnePokemonController,
  EditOnePokemonController,
  GetAllPokemonsController,
  GetPokemonByIdController,
} from '../controllers/pokemons';
import { VerifyTypeLazyLoad } from '../middlewares/pokemons';

const router = Router();

// get all pokemons
router.get(
  '/',
  VerifyTypeLazyLoad.handle,
  GetAllPokemonsController.handle,
);

// get one pokemon
router.get('/:id', GetPokemonByIdController.handle);

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

// edit one pokemon
router.put('/:id', EditOnePokemonController.handle);

// delete one pokemon
router.delete('/:id', DeleteOnePokemonController.handle);

export default router;
