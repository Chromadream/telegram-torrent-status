import { Torrent } from "../model";

const filterForDownloading = (torrents: Torrent[]): Torrent[] => {
  return torrents.filter((x: Torrent): boolean => x.status === "Downloading");
};

const filterForCompleted = (torrents: Torrent[]): Torrent[] => {
  return torrents.filter((x: Torrent): boolean => x.status === "Finished");
};

export { filterForCompleted, filterForDownloading };
