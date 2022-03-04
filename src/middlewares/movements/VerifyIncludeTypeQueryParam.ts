import { NextFunction, Request, Response } from 'express';

import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';

class VerifyIncludeTypeQueryParam {
  static async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ErrorObject> | void> {
    try {
      const { includeType } = req.query;

      const errorObject: ErrorObject = {
        message: 'query \'includeType\' only accepts \'true\' or \'false\'',
      }

      if (includeType === undefined || includeType.length === 0) {
        return next();
      }

      if (!includeType.toString().match(/^(true|false)$/i)) {
        return res.status(StatusCode.BadRequest).json(errorObject);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default VerifyIncludeTypeQueryParam;
