import { Router } from "express";

import {
  CreateOneTypeController,
  GetAllTypesController,
} from '../controllers/types';

const router = Router();

// get all poketypes
router.get('/', GetAllTypesController.handle);

// create one poketype
router.post('/', CreateOneTypeController.handle);

export default router;
