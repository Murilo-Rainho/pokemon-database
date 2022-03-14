import { StatusCode } from '../../utils/enums';

import { ErrorObject } from '../../interfaces/utils';
import { ErrorCatcher } from '../../utils/classes';

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
        return new ErrorCatcher(errorMessage, StatusCode.BadRequest);
      }

      return undefined;
    } catch (error) {
      return new ErrorCatcher(error.message, StatusCode.InternalServerError);
    }
  }
}

export default VerifyTypeLazyLoad;
