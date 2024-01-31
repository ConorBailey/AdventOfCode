import { assert } from "chai";
import {  readFileToArray } from "../src";

describe("readFileToArray", () => {
    it("Should return the total", () => {
        const result = readFileToArray("")
        assert.equal(result, 56285)
    })
})

// describe("testFunction", () => {
//     it("Should return the lines in an array", () => {
//         const result = testFunction("")
//         assert.equal(result, 56285)
//     })
// })
