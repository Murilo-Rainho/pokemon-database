interface IRepository<S, T> {
  findAll(): Promise<T[]>;
  findOne(id: string | number): Promise<T>;
  createOne(elementData: S): Promise<T>;
  editOne(elementData: S, id: string | number): Promise<void>;
  deleteOne(id: string | number): Promise<void>;
}

export default IRepository;
