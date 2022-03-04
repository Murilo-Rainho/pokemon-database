"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movements_1 = require("../controllers/movements");
const movements_2 = require("../middlewares/movements");
const router = (0, express_1.Router)();
// get all movements
router.get('/', movements_2.VerifyIncludeTypeQueryParam.handle, movements_1.GetAllMovementsController.handle);
// create one movement
router.post('/', movements_1.CreateOneMovementController.handle);
exports.default = router;
