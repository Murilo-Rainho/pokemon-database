interface IRepository<T> {
  findAll(): Promise<T[]>;
  findOne(): Promise<T>;
  createOne(): Promise<T>;
  editOne(): Promise<T>;
  deleteOne(): Promise<T>;
}

export default IRepository;
