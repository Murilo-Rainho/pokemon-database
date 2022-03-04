import { Router } from 'express';

import {
  CreateOneMovementController,
  GetAllMovementsController,
} from '../controllers/movements'

const router = Router();

// get all movements
router.get('/', GetAllMovementsController.handle);

// create one movement
router.post('/', CreateOneMovementController.handle);

export default router;
