import { SimpleTime } from "../../src/model";

interface ETA {
  [id: string]: SimpleTime;
}

const ETAs: ETA = {
  "1d": {
    days: 1,
    hours: 0,
    minutes: 1,
    seconds: 1,
    total: 86461,
  },
  "1h": {
    days: 0,
    hours: 1,
    minutes: 1,
    seconds: 1,
    total: 3661,
  },
  "1m": {
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 1,
    total: 61,
  },
  "1s": {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 59,
    total: 59,
  },
};

export { ETAs };
