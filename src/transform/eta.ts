import { SimpleTime } from "../model";

const readableTime = (time: SimpleTime): string => {
  let result = "";
  if (time.days > 0) {
    result = `${result} ${time.days}d`;
  }
  if (time.hours > 0) {
    result = `${result} ${time.hours}h`;
  }
  if (time.minutes > 0) {
    result = `${result} ${time.minutes}m`;
  }
  if (time.seconds > 0) {
    result = `${result} ${time.seconds}s`;
  }
  return result.trim();
};

export { readableTime };
