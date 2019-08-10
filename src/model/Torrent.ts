import { SimpleTime } from "./SimpleTime";

export interface Torrent {
  status: Status;
  eta: SimpleTime;
  name: string;
  percentDone: number;
  currentSpeed: number;
}

export type Status = "Downloading" | "Finished" | "Queued";
