"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose = require("mongoose");
exports.Item = mongoose.model('Item', new mongoose.Schema({
    item: {
        type: String,
        required: true,
        minLength: [2, "Name must be 2 characters or more"],
        maxLength: [30, "Name must be 30 characters or less"],
    },
    quantity: {
        type: Number,
    },
    link: {
        type: String,
    }
}));
//# sourceMappingURL=item.js.map