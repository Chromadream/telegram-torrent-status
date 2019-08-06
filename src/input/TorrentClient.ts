import { Torrent } from "../model";

export interface TorrentClient {
  getAll(): Promise<Torrent[]>;
}
