"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");
class App {
    constructor() {
        this.express = express();
        this.initEnvVariables();
        this.initCors();
        this.initBodyParser();
        this.mountRoutes();
    }
    initEnvVariables() {
        dotenv.config({ path: 'env_variables.env' });
    }
    initCors() {
        this.express.use(cors({
            origin: process.env.CORS_ADDRESS,
            optionsSuccessStatus: 200
        }));
    }
    initBodyParser() {
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
    }
    mountRoutes() {
        this.express.use('/item', routes);
        this.express.use('/', (req, res) => {
            res.status(404).send('Error 404: The page you are looking for could not be found');
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map