"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_item = exports.put_item = exports.get_item = exports.post_item = exports.get_items = void 0;
const db_1 = require("../db");
const item_1 = require("../models/item");
const itemValidator_1 = require("../validators/itemValidator");
new db_1.default();
const get_items = (req, res) => {
    item_1.Item.find()
        .then(items => {
        res.status(200).send(items);
    })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};
exports.get_items = get_items;
exports.post_item = [
    itemValidator_1.validate,
    itemValidator_1.checkErrors,
    (req, res) => {
        const new_item = new item_1.Item({
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        });
        new_item.save()
            .then(item => {
            res.status(200).send(item);
        })
            .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }
];
const get_item = (req, res) => {
    item_1.Item.findById(req.params.id)
        .then(item => {
        res.status(200).send(item);
    })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};
exports.get_item = get_item;
exports.put_item = [
    itemValidator_1.validate,
    itemValidator_1.checkErrors,
    (req, res) => {
        const updated_item = new item_1.Item({
            _id: req.params.id,
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        });
        item_1.Item.updateOne({ _id: updated_item._id }, updated_item, { runValidators: true })
            .then(item => {
            res.status(200).send(item);
        })
            .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }
];
const delete_item = (req, res) => {
    item_1.Item.deleteOne({ _id: req.params.id })
        .then(item => {
        res.status(200).send(item);
    })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};
exports.delete_item = delete_item;
//# sourceMappingURL=itemController.js.map