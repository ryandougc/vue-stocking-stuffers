"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const db_1 = require("../../src/db");
const connection = new db_1.default();
describe('database', () => {
    it('should return a Db object to show that a connection has been established', () => {
        chai_1.expect(connection).to.be.a('object');
    });
});
//# sourceMappingURL=db.test.js.map