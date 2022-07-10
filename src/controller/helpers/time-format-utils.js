const MS_IN_SEC = 1000;
const MS_IN_MIN = MS_IN_SEC * 60;
const MS_IN_HOUR = MS_IN_MIN * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

function leftPadWith0s(inputNumber, minLength) {
  if (minLength < 1) return;  // TODO: error
  return "0".repeat(minLength - inputNumber.toString().length) + inputNumber.toString();
}

function strFormatDays(days) {
  if (days < 0) return '0 days';
  return days === 1 ? days + ' day' : days + ' days';
}

function strFormatHMS(hours, minutes, seconds) {
  return leftPadWith0s(hours, 2) + 'h:' + leftPadWith0s(minutes, 2) + 'm:' + leftPadWith0s(seconds, 2) + 's';
}

function timeFormatToS(timeInMs) {
  const d = Math.floor(timeInMs / MS_IN_DAY),
        h = Math.floor((timeInMs % MS_IN_DAY) / MS_IN_HOUR),
        m = Math.floor((timeInMs % MS_IN_HOUR) / MS_IN_MIN),
        s = Math.floor((timeInMs % MS_IN_MIN) / MS_IN_SEC);

  return strFormatDays(d) + ' ' + strFormatHMS(h, m, s);
}

export function buildNextRaceStr(race, timeInMs) {
  if (!race) return 'There are no more races, must be the end of the season.';
  if (timeInMs < 0) return race + ' is on now!';

  return race + ' is on in ' + timeFormatToS(timeInMs);
}