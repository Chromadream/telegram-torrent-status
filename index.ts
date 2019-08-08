import { Transmission } from "@ctrl/transmission";
import { TransmissionClient } from "./src/input";
import { TorrentSettings } from "@ctrl/shared-torrent";

const client = new Transmission({
  baseUrl: "http://localhost:9091",
});
const input = new TransmissionClient(client);
input
  .getAll()
  .then(x =>
    x
      .filter(x => x.status === "Downloading")
      .forEach(x => console.log(x.name, x.currentSpeed)),
  );
