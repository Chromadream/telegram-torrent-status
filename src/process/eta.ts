import { SimpleTime } from "../model";

const simpleTime = (seconds: number): SimpleTime => {
  const time = new Date(seconds * 1000);
  const days = time.getUTCDate() - 1;
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const secondsLeft = time.getUTCSeconds();
  const total = seconds;
  return { days, hours, minutes, seconds: secondsLeft, total };
};

export { simpleTime };
