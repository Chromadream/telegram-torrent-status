import { Torrent } from "../model";

export interface InternalClient {
  getAll(): Promise<Torrent[]>;
}
