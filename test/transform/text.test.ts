import { expect } from "chai";
import { torrentList } from "../../src/transform";
import { Torrent } from "../../src/model";
import { describe, it } from "mocha";
import os from "os";
import { torrents } from "../testData";

describe("Text transformation", () => {
  it("returns correct string for single Downloading file", done => {
    const list: Torrent[] = [torrents["short download"]];
    const expected = `${list[0].name} ${list[0].status} ${list[0].percentDone}% (59s@${list[0].currentSpeed}kB/s)`;
    const actual = torrentList(list);
    expect(actual).to.equal(expected);
    done();
  });
  it("returns correct string for single Finished file", done => {
    const list: Torrent[] = [torrents.finished];
    const expected = `${list[0].name} ${list[0].status} ${list[0].percentDone}%`;
    const actual = torrentList(list);
    expect(actual).to.equal(expected);
    done();
  });
  it("return correct string for multiple files", done => {
    const list: Torrent[] = [
      torrents["short download"],
      torrents["longer download"],
    ];
    let expected = `${list[0].name} ${list[0].status} ${list[0].percentDone}% (59s@${list[0].currentSpeed}kB/s)${os.EOL}`;
    expected += `${list[1].name} ${list[1].status} ${list[1].percentDone}% (1h 1m 1s@${list[1].currentSpeed}kB/s)`;
    const actual = torrentList(list);
    expect(actual).to.equal(expected);
    done();
  });
});
