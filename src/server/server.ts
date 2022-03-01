import { default as server } from './app';

import { config } from "dotenv";

config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server is listen at port ${PORT}`);
});
