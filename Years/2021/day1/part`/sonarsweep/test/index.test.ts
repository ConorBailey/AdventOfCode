import { assert } from "chai";
import { sonarSweep } from "../src";

describe("sonarSweep", () => {
    it("should return the amount of measurements that are larger than the previous", () => {
        const result = sonarSweep("")
        assert.equal(result, 0)
    })
})