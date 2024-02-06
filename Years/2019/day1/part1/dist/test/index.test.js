"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("rocketEquation", () => {
    it("should return the result", () => {
        const result = (0, src_1.RocketEquation)("");
        chai_1.assert.equal(result, 0);
    });
});
