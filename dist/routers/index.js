"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonRouter = exports.movementRouter = exports.typeRouter = void 0;
var typeRouter_1 = require("./typeRouter");
Object.defineProperty(exports, "typeRouter", { enumerable: true, get: function () { return __importDefault(typeRouter_1).default; } });
var movementRouter_1 = require("./movementRouter");
Object.defineProperty(exports, "movementRouter", { enumerable: true, get: function () { return __importDefault(movementRouter_1).default; } });
var pokemonRouter_1 = require("./pokemonRouter");
Object.defineProperty(exports, "pokemonRouter", { enumerable: true, get: function () { return __importDefault(pokemonRouter_1).default; } });
