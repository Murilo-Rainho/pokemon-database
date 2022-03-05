import { getRepository } from 'typeorm';

import { Type } from '../../database/entities';

class GetAllTypesModel {
  static async execute(
    includePokemons: boolean,
  ): Promise<Type[] | object[]> {
    const repo = getRepository(Type);

    const allTypes = await repo.find();

    const result: object[] = [];

    if (includePokemons) {
      const allTypesPokemons = await Promise.all(allTypes.map(
        (type: Type) => type.pokemons
      ));

      allTypes.forEach((type: Type, index: number) => {
        result[index] = { ...type, pokemons: allTypesPokemons[index] };
      });

      return result;
    }

    return allTypes;
  };
}

export default GetAllTypesModel;
