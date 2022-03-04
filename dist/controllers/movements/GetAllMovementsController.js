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
const enums_1 = require("../../utils/enums");
const movements_1 = require("../../services/movements");
class GetAllMovementsController {
    static handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { includeType } = req.query;
                const booleanIncludeType = (includeType === 'true') ? true : false;
                const result = yield movements_1.GetAllMovementsService.execute(booleanIncludeType);
                return res.status(enums_1.StatusCode.Ok).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = GetAllMovementsController;
