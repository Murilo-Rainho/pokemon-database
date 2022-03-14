import { StatusCode } from '../../utils/enums';

import { GetAllPokemonsService } from '../../services/pokemons';

import { ErrorObject } from '../../interfaces/utils';
import ControllerResponse from '../../interfaces/utils/ControllerResponse';
import { PokemonResponse } from '../../interfaces/pokemons';
import { ErrorCatcher } from '../../utils/classes';

class GetAllPokemonsController {
  async handle(
    reqQuery: any,
  ): Promise<ErrorObject | ControllerResponse<PokemonResponse[]>> {
    try {
      const { includeType } = reqQuery;

      const booleanIncludeType = (includeType === 'true') ? true : false;

      const result = await GetAllPokemonsService.execute(booleanIncludeType);

      return {
        httpStatusCode: StatusCode.Ok,
        result,
      };
    } catch (error) {
      return new ErrorCatcher(error.message, StatusCode.InternalServerError);
    }
  }
}

export default GetAllPokemonsController;
