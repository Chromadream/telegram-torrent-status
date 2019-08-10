import { describe, it } from "mocha";
import { expect } from "chai";
import { simpleTime } from "../../src/process";
import { SimpleTime } from "../../src/model";
import { ETAs } from "../testData/eta";

describe("ETA processing", () => {
  it("should return correctly for <1m", done => {
    const actual = simpleTime(59);
    const expected: SimpleTime = ETAs["1s"];
    expect(actual).to.deep.equals(expected);
    done();
  });

  it("should return correctly for >1min", done => {
    const actual = simpleTime(61);
    const expected: SimpleTime = ETAs["1m"];
    expect(actual).to.deep.equal(expected);
    done();
  });

  it("should return correctly for >1hr", done => {
    const actual = simpleTime(3661);
    const expected: SimpleTime = ETAs["1h"];
    expect(actual).to.deep.equal(expected);
    done();
  });

  it("should return correctly for >1d", done => {
    const actual = simpleTime(86461);
    const expected: SimpleTime = ETAs["1d"];
    expect(actual).to.deep.equal(expected);
    done();
  });
});
