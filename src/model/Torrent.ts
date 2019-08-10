import { Status, SimpleTime } from ".";

export interface Torrent {
  status: Status;
  eta: SimpleTime;
  name: string;
  percentDone: number;
  currentSpeed: number;
}
