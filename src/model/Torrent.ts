import { Status, SimpleTime } from ".";

export interface Torrent {
  status: Status;
  eta: SimpleTime | null;
  name: string;
  percentDone: number;
  currentSpeed: number;
}
