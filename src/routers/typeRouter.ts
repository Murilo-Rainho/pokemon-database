import { Router } from "express";

import {
  CreateOneTypeController,
  GetAllTypesController,
  EditOneTypeController,
  DeleteOneTypeController,
} from '../controllers/types';

import { VerifyPokemonsLazyLoad } from "../middlewares/types";

const router = Router();

// get all poketypes
router.get(
  '/',
  VerifyPokemonsLazyLoad.handle,
  GetAllTypesController.handle,
);

// create one poketype
router.post('/', CreateOneTypeController.handle);

// edit one poketype
router.put('/:id', EditOneTypeController.handle);

// delete one poketype
router.delete('/:id', DeleteOneTypeController.handle);

export default router;
