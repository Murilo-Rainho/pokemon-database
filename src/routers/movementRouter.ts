import { Router } from 'express';

import {
  CreateOneMovementController,
  EditOneMovementController,
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

// edit one movement
router.put('/:id', EditOneMovementController.handle);

export default router;
