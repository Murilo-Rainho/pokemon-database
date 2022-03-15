import { getRepository } from 'typeorm';

import { IRepository } from '../../interfaces/utils';

import { entities } from '../../interfaces/utils/IRepository';

import {
  Pokemon as PokemonEntity,
  Type as TypeEntity,
  Movement as MovementEntity,
} from '../entities';

const entities = {
  Movement: MovementEntity,
  Pokemon: PokemonEntity,
  Type: TypeEntity,
};

type entityType = 'Pokemon' | 'Type' | 'Movement';

class Repository implements IRepository {
  private repo;

  constructor(entity: entityType) {
    this.repo = getRepository(entities[entity]);
  }

   async findAll(): Promise<entities[]> {
    const allElements = this.repo.find();

    return allElements;
  }

   async findOne(id: string | number): Promise<entities> {
    const element = this.repo.findOne(id);

    return element;
  }

  // async createOne(elementData: entities): Promise<void> {
  //   await this.repo.save(elementData);
  // }

  // async editOne(elementData: entities, id: number | string): Promise<void> {
  //   this.repo.update(id, elementData);
  // }

  async deleteOne(id: number | string): Promise<void> {
    this.repo.delete(id);
  }
}

export default Repository;
