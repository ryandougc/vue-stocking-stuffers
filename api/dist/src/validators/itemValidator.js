"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkErrors = exports.validate = void 0;
const express_validator_1 = require("express-validator");
exports.validate = [
    express_validator_1.body('name', "Name field is inputted incorrectly")
        .trim().escape()
        .notEmpty().withMessage("Name field cannot be empty")
        .isLength({ min: 2, max: 20 }).withMessage("Name must be 2 - 30 characters long")
];
const checkErrors = (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(500)
            .send(errors.array());
    }
};
exports.checkErrors = checkErrors;
//# sourceMappingURL=itemValidator.js.map