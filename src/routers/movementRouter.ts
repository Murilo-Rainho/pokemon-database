import { Router } from 'express';

import {
  GetAllMovementsController,
} from '../controllers/movements'

const router = Router();

router.get('/', GetAllMovementsController.handle)

export default router;
