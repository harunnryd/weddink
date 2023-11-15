import dayjs from "dayjs";

export function getReminingTimeUntillMsTimeStamp(timeStampMs) {
  const timeStampDayJs = dayjs(timeStampMs);
  const nowDayjs = dayjs();
  return {
    days: getReminingDays(timeStampDayJs, nowDayjs),
    hours: getReminingHours(timeStampDayJs, nowDayjs),
    minutes: getReminingMinutes(timeStampDayJs, nowDayjs),
    seconds: getReminingSeconds(timeStampDayJs, nowDayjs),
  };
}

const getReminingDays = (timeStampDayJs, nowDayjs) => {
  const days = timeStampDayJs.diff(nowDayjs, "days");
  return days.toString();
};

const getReminingHours = (timeStampDayJs, nowDayjs) => {
  const hours = timeStampDayJs.diff(nowDayjs, "hours") % 24;
  return padWithZero(hours, 2);
};

const getReminingMinutes = (timeStampDayJs, nowDayjs) => {
  const minutes = timeStampDayJs.diff(nowDayjs, "minutes") % 60;
  return padWithZero(minutes, 2);
};

const getReminingSeconds = (timeStampDayJs, nowDayjs) => {
  const seconds = timeStampDayJs.diff(nowDayjs, "seconds") % 60;
  return padWithZero(seconds, 2);
};

const padWithZero = (number, minLength) => {
  const numStr = number.toString();
  if (numStr.length >= minLength) return numStr;
  return "0".repeat(minLength - numStr.length) + numStr;
};
