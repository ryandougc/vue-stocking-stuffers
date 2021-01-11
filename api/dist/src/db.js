"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor() {
        this.productionCheck();
        this.connect();
    }
    productionCheck() {
        require('dotenv').config({ path: 'env_variables.env' });
    }
    connect() {
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log("Mongo DB Connection Established");
            this.db = db;
        });
    }
}
exports.default = Db;
//# sourceMappingURL=db.js.map