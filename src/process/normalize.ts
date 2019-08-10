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

export { torrentStatus };
