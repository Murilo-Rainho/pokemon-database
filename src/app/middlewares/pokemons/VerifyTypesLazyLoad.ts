import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';

class VerifyTypeLazyLoad {
  handle(
    reqQuery: any
  ): ErrorObject | void {
    try {
      const { includeType } = reqQuery;

      const errorMessage = 'query \'includeType\' only accepts \'true\' or \'false\'';

      if (includeType === undefined || includeType.length === 0) {
        return undefined;
      }

      if (!includeType.toString().match(/^(true|false)$/i)) {
        return {
          httpStatusCode: StatusCode.BadRequest,
          message: errorMessage,
        };
      }

      return undefined;
    } catch (error) {
      return {
        message: error.message,
        httpStatusCode: StatusCode.InternalServerError,
      };
    }
  }
}

export default VerifyTypeLazyLoad;
