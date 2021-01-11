"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kittenController = require("../controllers/kittenController");
const router = express_1.Router();
router.get('/', kittenController.get_kittens);
router.post('/', kittenController.post_kitten);
router.get('/:id', kittenController.get_kitten);
router.put('/:id', kittenController.put_kitten);
router.delete('/:id', kittenController.delete_kitten);
// //GET firearms list CSV file
// router.get('/csv', firearm_controller.firearm_create_csv)
module.exports = router;
//# sourceMappingURL=kittenRoutes.js.map