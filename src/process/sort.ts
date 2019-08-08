import { Torrent } from "../model";

const sortByAscendingName = (torrents: Torrent[]): Torrent[] => {
  return torrents.sort((a: Torrent, b: Torrent): number => {
    if (a.name > b.name) {
      return 1;
    } else if (b.name > a.name) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortByDescendingName = (torrents: Torrent[]): Torrent[] => {
  return torrents.sort((a: Torrent, b: Torrent): number => {
    if (a.name < b.name) {
      return 1;
    } else if (b.name < a.name) {
      return -1;
    } else {
      return 0;
    }
  });
};

export { sortByAscendingName, sortByDescendingName };
