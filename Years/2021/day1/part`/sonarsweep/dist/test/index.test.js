"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("sonarSweep", () => {
    it("should return the amount of measurements that are larger than the previous", () => {
        const result = (0, src_1.sonarSweep)("");
        chai_1.assert.equal(result, 0);
    });
});
