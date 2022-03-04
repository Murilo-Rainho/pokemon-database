"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../database/connection");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routers_1 = require("../routers");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/ping', (_req, res, _next) => {
    return res.status(200).send('pong');
});
app.use('/type', routers_1.typeRouter);
app.use('/movement', routers_1.movementRouter);
app.use('/pokemon', routers_1.pokemonRouter);
exports.default = app;
