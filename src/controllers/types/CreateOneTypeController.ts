import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities/Types';

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

      const createdType = await CreateOneTypeService.execute(typeData);

      if (createdType instanceof Error) {
        return res.status(409).json({ message: createdType.message })
      }

      return res.status(201).json(createdType);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOneTypeController;
