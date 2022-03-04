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
const enums_1 = require("../../utils/enums");
const classes_1 = require("../../utils/classes");
class CreateOneTypeModel {
    static execute({ movement, power, description, typeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementRepo = (0, typeorm_1.getRepository)(entities_1.Movement);
            const typeRepo = (0, typeorm_1.getRepository)(entities_1.Type);
            const existType = yield typeRepo.findOne(typeId);
            if (!existType) {
                return new classes_1.ErrorCatcher('Has no type with this id', enums_1.StatusCode.NotFound);
            }
            const existMovement = yield movementRepo.findOne({ movement });
            if (existMovement) {
                return new classes_1.ErrorCatcher('Movement already exists', enums_1.StatusCode.Conflict);
            }
            const createdMovement = movementRepo.create({
                movement, power, description, type_id: typeId,
            });
            yield movementRepo.save(createdMovement);
            return createdMovement;
        });
    }
    ;
}
exports.default = CreateOneTypeModel;
