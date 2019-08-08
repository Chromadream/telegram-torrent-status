import { Transmission } from "@ctrl/transmission";
import { TransmissionClient } from "./src/input";
import { TorrentSettings } from "@ctrl/shared-torrent";
import { sortByAscendingName } from "./src/process";

const client = new Transmission({
  baseUrl: "http://localhost:9091",
});
const input = new TransmissionClient(client);
input
  .getAll()
  .then(x => x.filter(x => x.status === "Downloading"))
  .then(x => sortByAscendingName(x))
  .then(x => x.forEach(y => console.log(y.name, y.currentSpeed)));
