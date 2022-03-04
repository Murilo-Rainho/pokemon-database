import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { DeleteOneTypeService } from '../../services/types';

import { StatusCode } from '../../utils/enums';

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
        return res.status(StatusCode.NotFound).json({ message: result.message })
      }

      return res.status(StatusCode.NoContent).send();
    } catch (error) {
      next(error);
    }
  }
}

export default DeleteOneTypeController;
