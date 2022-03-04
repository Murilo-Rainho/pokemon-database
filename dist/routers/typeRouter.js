"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../controllers/types");
const router = (0, express_1.Router)();
// get all poketypes
router.get('/', types_1.GetAllTypesController.handle);
// create one poketype
router.post('/', types_1.CreateOneTypeController.handle);
// edit one poketype
router.put('/:id', types_1.EditOneTypeController.handle);
// delete one poketype
router.delete('/:id', types_1.DeleteOneTypeController.handle);
exports.default = router;
