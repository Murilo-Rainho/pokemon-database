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
const typeorm_1 = require("typeorm");
const entities_1 = require("../../database/entities");
class EditOneTypeModel {
    static execute(id, { type, hexColor }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(entities_1.Type);
            const existType = yield repo.findOne(id);
            if (!existType) {
                return new Error('Type does not exists');
            }
            existType.hex_color = (hexColor) ? hexColor : existType.hex_color;
            existType.type = (type) ? type : existType.type;
            yield repo.save(existType);
            return existType;
        });
    }
    ;
}
exports.default = EditOneTypeModel;
