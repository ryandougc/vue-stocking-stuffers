import { body, validationResult } from "express-validator"

export const validate = [
    body('name', "Name field is inputted incorrectly")
    .trim().escape()
    .notEmpty().withMessage("Name field cannot be empty")
    .isLength({min:2, max: 20}).withMessage("Name must be 2 - 30 characters long")
]

export const checkErrors = (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res
            .status(500)
            .send(errors.array())
    }

    next()
}