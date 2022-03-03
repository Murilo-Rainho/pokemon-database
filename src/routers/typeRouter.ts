import { Router } from "express";

import { GetAllTypesController } from '../controllers/types';

const router = Router();

// get all poketypes
router.get('/', GetAllTypesController.handle);

export default router;
