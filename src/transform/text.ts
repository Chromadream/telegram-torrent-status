import { Torrent } from "../model";
import os from "os";

const torrentList = (input: Torrent[]): string => {
  let result = ``;
  input.forEach((x: Torrent) => {
    result = `${result}${x.name} ${x.status} ${x.percentDone}% (${x.eta}@${x.currentSpeed}kB/s)${os.EOL}`;
  });
  return result.trimRight();
};

export { torrentList };
