import 'reflect-metadata';
import '../app/database/connection';

import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

import {
  typeRouter,
  movementRouter,
  pokemonRouter,
} from '../routers';

const app: Express = express();

app.use(bodyParser.json());

app.get('/ping', (
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response<string> => {
  return res.status(200).send('pong');
});

app.use('/type', typeRouter);

app.use('/movement', movementRouter);

app.use('/pokemon', pokemonRouter);

export default app;
