"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const kittenRoutes = require("./routes/kittenRoutes");
class App {
    constructor() {
        this.express = express();
        this.initBodyParser();
        this.mountRoutes();
    }
    initBodyParser() {
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
    }
    mountRoutes() {
        this.express.use('/kitten/', kittenRoutes);
        this.express.use('/', (req, res) => {
            res.status(404).send('Error 404: The page you are looking for could not be found');
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map