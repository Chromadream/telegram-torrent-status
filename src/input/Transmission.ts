import { TorrentClient } from ".";
import { Torrent } from "../model";
import { Transmission } from "@ctrl/transmission";
import { NormalizedTorrent } from "@ctrl/shared-torrent";

export class TransmissionClient implements TorrentClient {
  private client: Transmission;

  public constructor(client: Transmission) {
    this.client = client;
  }

  public getAll(): Promise<Torrent[]> {
    return this.client.getAllData().then(value => this.map(value.torrents));
  }

  private map(input: NormalizedTorrent[]): Torrent[] {
    return input.map(x => {
      var output: Torrent = {
        name: x.name,
        eta: x.eta,
        percentDone: x.progress,
        status: this.torrentStatus(x),
      };
      return output;
    });
  }

  private torrentStatus(input: NormalizedTorrent): "Downloading" | "Finished" {
    return input.isCompleted ? "Finished" : "Downloading";
  }
}
