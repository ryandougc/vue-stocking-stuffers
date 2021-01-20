"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkErrors = exports.validate = void 0;
const express_validator_1 = require("express-validator");
exports.validate = [
    express_validator_1.body('item', "Name field is inputted incorrectly")
        .trim().escape()
        .notEmpty().withMessage("Name field cannot be empty")
        .isLength({ min: 2, max: 20 }).withMessage("Name must be 2 - 30 characters long"),
    express_validator_1.body('quantity', "Quantity field is inputted incorrectly")
        .trim().escape(),
    express_validator_1.body('link', "Link field is inputted incorrectly")
        .trim()
        .isURL()
];
const checkErrors = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(500)
            .send(errors.array());
    }
    next();
};
exports.checkErrors = checkErrors;
//# sourceMappingURL=itemValidator.js.map