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
exports.delete_kitten = exports.put_kitten = exports.get_kitten = exports.post_kitten = exports.get_kittens = void 0;
const db_1 = require("../db");
const kitten_1 = require("../models/kitten");
new db_1.default();
const get_kittens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kittens = yield kitten_1.Kitten.find();
        res.status(200).send(kittens);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error 500: Couldn't find the kittens you're looking for");
    }
});
exports.get_kittens = get_kittens;
const post_kitten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kitty = new kitten_1.Kitten({ name: req.body.name });
    try {
        const kitten = yield kitty.save();
        res.status(200).send(kitten);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error 500: Couldn't add kitten to the database");
    }
});
exports.post_kitten = post_kitten;
const get_kitten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kitten = yield kitten_1.Kitten.findById(req.params.id);
        res.status(200).send(kitten);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for");
    }
});
exports.get_kitten = get_kitten;
const put_kitten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kitty = new kitten_1.Kitten({
        _id: req.params.id,
        name: req.body.name
    });
    try {
        const kitten = yield kitten_1.Kitten.updateOne({ _id: kitty._id }, { name: req.body.name });
        res.status(200).send(kitten);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for");
    }
});
exports.put_kitten = put_kitten;
const delete_kitten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kitten = yield kitten_1.Kitten.deleteOne({ _id: req.params.id });
        res.status(200).send(kitten);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for");
    }
});
exports.delete_kitten = delete_kitten;
//# sourceMappingURL=kittenController.js.map