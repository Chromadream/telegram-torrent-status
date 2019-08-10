import { TorrentState } from "@ctrl/shared-torrent";
import { Status } from "../model";

const torrentStatus = (state: TorrentState): Status => {
  switch (state) {
    case TorrentState.downloading:
      return "Downloading";
    case TorrentState.seeding:
      return "Finished";
    case TorrentState.error:
      return "Error";
    case TorrentState.queued:
      return "Queued";
    default:
      return "Unknown";
  }
};

const currentSpeed = (torrentSpeed: number): number => {
  return torrentSpeed / 1000;
};

export { torrentStatus, currentSpeed };
