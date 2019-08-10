import { ETAs } from ".";
import { Torrent } from "../../src/model";

interface TorrentList {
  [key: string]: Torrent;
}

const torrents: TorrentList = {
  "short download": {
    status: "Downloading",
    eta: ETAs["1s"],
    name: "short download.mkxv",
    percentDone: 50,
    currentSpeed: 300,
  },
  "longer download": {
    status: "Downloading",
    eta: ETAs["1h"],
    name: "longer download.mkxv",
    percentDone: 50,
    currentSpeed: 300,
  },
  finished: {
    status: "Finished",
    eta: null,
    name: "finished.mkxv",
    percentDone: 100,
    currentSpeed: 0,
  },
};

export { torrents };
