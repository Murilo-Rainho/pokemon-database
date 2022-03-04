import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';
import { StatusCode } from '../../utils/enums';

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
        return res.status(StatusCode.Conflict).json({ message: result.message })
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOneTypeController;
