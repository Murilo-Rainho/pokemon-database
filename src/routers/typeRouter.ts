import { Router } from "express";

import {
  CreateOneTypeController,
  GetAllTypesController,
  EditOneTypeController,
} from '../controllers/types';

const router = Router();

// get all poketypes
router.get('/', GetAllTypesController.handle);

// create one poketype
router.post('/', CreateOneTypeController.handle);

// edit one poketype
router.put('/:id', EditOneTypeController.handle);

export default router;
