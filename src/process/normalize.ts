import { NormalizedTorrent, TorrentState } from "@ctrl/shared-torrent";
import { Status } from "../model";

const torrentStatus = (torrent: NormalizedTorrent): Status => {
  if (torrent.isCompleted) {
    return "Finished";
  }
  if (torrent.state == TorrentState.queued) {
    return "Queued";
  }
  return "Downloading";
};

const fileSize = (torrent: NormalizedTorrent): number => {
  return torrent.downloadSpeed / 1000;
};

export { torrentStatus, fileSize };
