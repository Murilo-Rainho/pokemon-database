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
const types_1 = require("../../services/types");
class EditOneTypeController {
    static handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id: typeId } = req.params;
                const typeData = req.body;
                const result = yield types_1.EditOneTypeService.execute(typeId, typeData);
                if (result instanceof Error) {
                    return res.status(enums_1.StatusCode.NotFound).json({ message: result.message });
                }
                return res.status(enums_1.StatusCode.Created).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = EditOneTypeController;
