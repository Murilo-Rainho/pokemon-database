import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';
import { DeleteOneTypeService } from '../../services/types';

class DeleteOneTypeController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type[]> | void> {
    try {
      const { id } = req.params;

      const result = await DeleteOneTypeService.execute(id);

      if (result instanceof Error) {
        return res.status(404).json({ message: result.message })
      }

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default DeleteOneTypeController;
