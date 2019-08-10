import { describe, it } from "mocha";
import { expect } from "chai";
import { readableTime } from "../../src/transform";
import { ETAs } from "../testData/eta";

describe("ETA tranformation", () => {
  it("should generate correct string for <1m", done => {
    const expected = "59s";
    const actual = readableTime(ETAs["1s"]);
    expect(actual).to.equal(expected);
    done();
  });
  it("should generate correct string for >1m", done => {
    const expected = "1m 1s";
    const actual = readableTime(ETAs["1m"]);
    expect(actual).to.equal(expected);
    done();
  });
  it("should generate correct string for >1h", done => {
    const expected = "1h 1m 1s";
    const actual = readableTime(ETAs["1h"]);
    expect(actual).to.equal(expected);
    done();
  });
  it("should generate correct string for >1d", done => {
    const expected = "1d 1m 1s";
    const actual = readableTime(ETAs["1d"]);
    expect(actual).to.equal(expected);
    done();
  });
});
