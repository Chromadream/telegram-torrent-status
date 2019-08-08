import { TorrentClient } from ".";
import { Torrent } from "../model";
import { Transmission } from "@ctrl/transmission";
import { NormalizedTorrent, AllClientData } from "@ctrl/shared-torrent";
import { torrentStatus } from "../process";

export class TransmissionClient implements TorrentClient {
  private client: Transmission;

  public constructor(client: Transmission) {
    this.client = client;
  }

  public getAll(): Promise<Torrent[]> {
    return this.client
      .getAllData()
      .then((value: AllClientData): Torrent[] => this.map(value.torrents));
  }

  private map(input: NormalizedTorrent[]): Torrent[] {
    return input.map(
      (x: NormalizedTorrent): Torrent => {
        var output: Torrent = {
          name: x.name,
          eta: x.eta,
          percentDone: x.progress,
          status: torrentStatus(x),
          currentSpeed: x.downloadSpeed,
        };
        return output;
      },
    );
  }
}
