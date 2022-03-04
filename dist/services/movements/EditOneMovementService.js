"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movements_1 = require("../../models/movements");
const classes_1 = require("../../utils/classes");
class EditOneMovementService {
    static execute(id, typeData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield movements_1.EditOneMovementModel.execute(id, typeData);
            if (result instanceof classes_1.ErrorCatcher) {
                return result;
            }
            return result;
        });
    }
}
exports.default = EditOneMovementService;
