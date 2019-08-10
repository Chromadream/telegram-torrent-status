import { expect } from "chai";
import { torrentList } from "../../src/transform";
import { Torrent } from "../../src/model";

describe("Transformers", () => {
  describe("texts", () => {
    it("return correct string for single Downloading file", done => {
      const list: Torrent[] = [
        {
          status: "Downloading",
          eta: 3,
          name: "sample torrent.mkxv",
          percentDone: 50,
          currentSpeed: 300,
        },
      ];
      const expected = `${list[0].name} ${list[0].status} ${list[0].percentDone}% (${list[0].eta}@${list[0].currentSpeed}kB/s)`;
      const actual = torrentList(list);
      expect(actual).to.equal(expected);
      done();
    });
  });
});
