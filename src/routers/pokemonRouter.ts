import { Router } from "express";

import { CreateOnePokemonController } from "../controllers/pokemons";

const router = Router();

// create one pokemon
router.post('/', CreateOnePokemonController.handle);

export default router;
