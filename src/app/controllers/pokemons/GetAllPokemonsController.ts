import { GetAllPokemonsService } from '../../services/pokemons';

import { ErrorObject, ControllerResponse } from '../../interfaces/utils';
import { PokemonResponse } from '../../interfaces/pokemons';

import { StatusCode } from '../../utils/enums';
import { ErrorCatcher } from '../../utils/classes';

class GetAllPokemonsController {
  private getAllPokemonsService = new GetAllPokemonsService();

  async handle(
    queriesRequest: any,
  ): Promise<ErrorObject | ControllerResponse<PokemonResponse[]>> {
    try {
      const { includeType } = queriesRequest;

      const booleanIncludeType = (includeType === 'true') ? true : false;

      const result = await this.getAllPokemonsService.execute(booleanIncludeType);

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
