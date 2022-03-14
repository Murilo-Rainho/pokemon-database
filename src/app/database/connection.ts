import { createConnection } from 'typeorm';

const connection = async () => {
  await createConnection();
  console.log('database connection is successfully');
}

connection();
