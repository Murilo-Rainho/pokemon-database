import { Router } from 'express';

import {
  CreateOneMovementController,
  GetAllMovementsController,
} from '../controllers/movements'

import {
  VerifyIncludeTypeQueryParam,
} from '../middlewares/movements';

const router = Router();

// get all movements
router.get(
  '/',
  VerifyIncludeTypeQueryParam.handle,
  GetAllMovementsController.handle,
);

// create one movement
router.post('/', CreateOneMovementController.handle);

export default router;
