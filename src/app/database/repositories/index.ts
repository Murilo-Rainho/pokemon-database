import { EntitySchema, getRepository } from 'typeorm';

import { IRepository } from '../../interfaces/utils';

class Repository<S, T> implements IRepository<S, T> {
  private repo;

  constructor(entity: EntitySchema) {
    this.repo = getRepository(entity);
  }

   async findAll(): Promise<T[]> {
    const allElements = this.repo.find();

    return allElements;
  }

   async findOne(id: string | number): Promise<T> {
    const element = this.repo.findOne(id);

    return element;
  }

  async createOne(elementData: S): Promise<T> {
    const element = this.repo.create(elementData);

    await this.repo.save(element);

    return element;
  }

  async editOne(elementData: S, id: number | string): Promise<void> {
    this.repo.update(id, elementData);
  }

  async deleteOne(id: number | string): Promise<void> {
    this.repo.delete(id);
  }
}

export default Repository;
