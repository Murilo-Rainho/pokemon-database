import 'reflect-metadata';

import '../database/connection';

import express, { Express, NextFunction, Request, Response } from 'express';

import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());

app.get('/ping', (
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response<string> => {
  return res.status(200).send('pong');
});

export default app;
