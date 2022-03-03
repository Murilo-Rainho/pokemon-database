import { NextFunction, Request, Response } from 'express';

import { Type } from '../../database/entities/Types';
import { GetAllTypesService } from '../../services/types';

class GetAllTypesController {
  static async handle(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Type[]> | void> {
    try {
      const allTypes = await GetAllTypesService.execute();

      return res.status(200).json(allTypes);
    } catch (error) {
      next(error);
    }
  }
}

export default GetAllTypesController;
