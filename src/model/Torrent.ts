export interface Torrent {
  status: Status;
  eta: number;
  name: string;
  percentDone: number;
  currentSpeed: number;
}

export type Status = "Downloading" | "Finished" | "Queued";
