import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';

import { CreateOneTypeService } from '../../services/types';

import { ErrorCatcher } from '../../utils/classes';
import { StatusCode } from '../../utils/enums';

class CreateOneTypeController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type> | void> {
    try {
      const typeData = req.body as TypeRequest;

      const result = await CreateOneTypeService.execute(typeData);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateOneTypeController;
