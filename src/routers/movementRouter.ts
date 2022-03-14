import { Router } from 'express';

import {
  CreateOneMovementController,
  DeleteOneMovementController,
  EditOneMovementController,
  GetAllMovementsController,
} from '../app/controllers/movements'

import {
  VerifyTypeLazyLoad,
} from '../app/middlewares/movements';

const router = Router();

// get all movements
router.get(
  '/',
  VerifyTypeLazyLoad.handle,
  GetAllMovementsController.handle,
);

// create one movement
router.post('/', CreateOneMovementController.handle);

// edit one movement
router.put('/:id', EditOneMovementController.handle);

// delete one movement
router.delete('/:id', DeleteOneMovementController.handle);

export default router;
