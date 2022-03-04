import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities';

import { TypeRequest } from '../../interfaces/types';

import { EditOneTypeService } from '../../services/types';

import { StatusCode } from '../../utils/enums';
import { ErrorCatcher } from '../../utils/classes';

class EditOneTypeController {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type> | void> {
    try {
      const { id: typeId } = req.params;
      const typeData = req.body as TypeRequest;

      const result = await EditOneTypeService.execute(typeId, typeData);

      if (result instanceof ErrorCatcher) {
        return res.status(result.httpStatusCode).json({ message: result.message })
      }

      return res.status(StatusCode.Created).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default EditOneTypeController;
