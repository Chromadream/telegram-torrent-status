import { NormalizedTorrent } from "@ctrl/shared-torrent";

const torrentStatus = (
  torrent: NormalizedTorrent,
): "Downloading" | "Finished" => {
  return torrent.isCompleted ? "Finished" : "Downloading";
};

export { torrentStatus };
