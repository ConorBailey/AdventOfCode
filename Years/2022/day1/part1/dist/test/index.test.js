"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("readFileToArray", () => {
    it("Should return the total", () => {
        const result = (0, src_1.readFileToArray)("");
        chai_1.assert.equal(result, 56285);
    });
});
// describe("testFunction", () => {
//     it("Should return the lines in an array", () => {
//         const result = testFunction("")
//         assert.equal(result, 56285)
//     })
// })
