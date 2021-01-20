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
exports.delete_item = exports.put_item = exports.get_item = exports.post_item = exports.get_items = void 0;
const db_1 = require("../db");
const item_1 = require("../models/item");
const itemValidator_1 = require("../validators/itemValidator");
new db_1.default();
const get_items = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield item_1.Item.find();
        res.status(200).send(items);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.get_items = get_items;
exports.post_item = [
    itemValidator_1.validate,
    itemValidator_1.checkErrors,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const new_item = new item_1.Item({
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        });
        try {
            const item = yield new_item.save();
            res.status(200).send(item);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })
];
const get_item = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_1.Item.findById(req.params.id);
        res.status(200).send(item);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.get_item = get_item;
exports.put_item = [
    itemValidator_1.validate,
    itemValidator_1.checkErrors,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const updated_item = new item_1.Item({
            _id: req.params.id,
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        });
        try {
            const item = yield item_1.Item.updateOne({ _id: updated_item._id }, updated_item, { runValidators: true });
            res.status(200).send(item);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })
];
const delete_item = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_1.Item.deleteOne({ _id: req.params.id });
        res.status(200).send(item);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.delete_item = delete_item;
//# sourceMappingURL=itemController.js.map