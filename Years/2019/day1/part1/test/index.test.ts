import { assert } from "chai"
import { RocketEquation } from "../src"

describe("rocketEquation", () => {
    it("should return the result", () => {
        const result = RocketEquation("")
        assert.equal(result,0)
    })
})