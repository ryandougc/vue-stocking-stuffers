"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kitten = void 0;
const mongoose = require("mongoose");
exports.Kitten = mongoose.model('Kitten', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "Name must be 2 characters or more"],
        maxLength: [30, "Name must be 30 characters or less"]
    }
}));
//# sourceMappingURL=kitten.js.map