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
const classes_1 = require("../../utils/classes");
const enums_1 = require("../../utils/enums");
class EditOneMovementModel {
    static execute(id, { typeId, description, movement, power }) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementRepo = (0, typeorm_1.getRepository)(entities_1.Movement);
            const typeRepo = (0, typeorm_1.getRepository)(entities_1.Type);
            const existType = yield typeRepo.findOne(typeId);
            if (!existType) {
                return new classes_1.ErrorCatcher('Has no type with this \'typeId\'', enums_1.StatusCode.NotFound);
            }
            const existMovement = yield movementRepo.findOne(id);
            if (!existMovement) {
                return new classes_1.ErrorCatcher('Movement does not exists', enums_1.StatusCode.NotFound);
            }
            existMovement.type_id = (typeId) ? typeId : existMovement.type_id;
            existMovement.description = (description) ? description : existMovement.description;
            existMovement.movement = (movement) ? movement : existMovement.movement;
            existMovement.power = (power) ? power : existMovement.power;
            yield movementRepo.save(existMovement);
            return existMovement;
        });
    }
    ;
}
exports.default = EditOneMovementModel;
