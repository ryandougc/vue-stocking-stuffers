"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dotenv = require("dotenv");
class Db {
    constructor() {
        this.initEnvVariables();
        this.connect();
    }
    initEnvVariables() {
        dotenv.config({ path: 'env_variables.env' });
    }
    connect() {
        mongoose
            .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
    }
}
exports.default = Db;
//# sourceMappingURL=db.js.map