export interface Torrent {
  status: "Downloading" | "Finished";
  eta: number;
  name: string;
  percentDone: number;
  currentSpeed: number;
}
