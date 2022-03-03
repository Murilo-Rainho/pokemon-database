import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';

import { CreateOneTypeService } from '../../services/types';

class CreateOneTypeController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type> | void> {
    try {
      const typeData = req.body as TypeRequest;

      const result = await CreateOneTypeService.execute(typeData);

      if (result instanceof Error) {
        return res.status(409).json({ message: result.message })
      }

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOneTypeController;
