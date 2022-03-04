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
class VerifyIncludeTypeQueryParam {
    static handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { includeType } = req.query;
                const errorObject = {
                    message: 'query \'includeType\' only accepts \'true\' or \'false\'',
                };
                if (includeType === undefined || includeType.length === 0) {
                    return next();
                }
                if (!includeType.toString().match(/^(true|false)$/i)) {
                    return res.status(enums_1.StatusCode.BadRequest).json(errorObject);
                }
                next();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = VerifyIncludeTypeQueryParam;
