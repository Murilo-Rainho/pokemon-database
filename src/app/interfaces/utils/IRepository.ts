interface IRepository<T> {
  findAll(): T[];
  findOne(): T;
  createOne(): T;
  editOne(): T;
  deleteOne(): T;
}

export default IRepository;
