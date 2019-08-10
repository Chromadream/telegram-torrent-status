import { describe, it } from "mocha";
import { expect } from "chai";
import { simpleTime } from "../../src/process";
import { SimpleTime } from "../../src/model";

describe("ETA processing", () => {
  it("should return correctly for <1m", done => {
    const actual = simpleTime(59);
    const expected: SimpleTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 59,
      total: 59,
    };
    expect(actual).to.deep.equals(expected);
    done();
  });

  it("should return correctly for >1min", done => {
    const actual = simpleTime(61);
    const expected: SimpleTime = {
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 1,
      total: 61,
    };
    expect(actual).to.deep.equal(expected);
    done();
  });

  it("should return correctly for >1hr", done => {
    const actual = simpleTime(3661);
    const expected: SimpleTime = {
      days: 0,
      hours: 1,
      minutes: 1,
      seconds: 1,
      total: 3661,
    };
    expect(actual).to.deep.equal(expected);
    done();
  });

  it("should return correctly for >1d", done => {
    const actual = simpleTime(86461);
    const expected: SimpleTime = {
      days: 1,
      hours: 0,
      minutes: 1,
      seconds: 1,
      total: 86461,
    };
    expect(actual).to.deep.equal(expected);
    done();
  });
});
