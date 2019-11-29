// eslint-disable-next-line import/prefer-default-export
import "moment/locale/id";
import moment from "moment";
import bigint from "big-integer";
import numeral from "numeral";

export const getInitial = name => {
  if (!name) {
    return "";
  }

  if (typeof name === "number") {
    return `+${name}`;
  }

  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

export const stringToNumber = (number = 0) => {
  if (typeof number === "string") {
    if (number.includes(".")) {
      const num = parseFloat(number);
      return bigint(num);
    }
    return bigint(number);
  }
  return number;
};

export const numberToPercentage = (number = 0, showDecimal = true) => {
  numeral.locale("id");
  if (typeof number === "number") {
    return showDecimal
      ? numeral(number).format("0.00")
      : numeral(number).format("0");
  }
  if (typeof number === "string") {
    const formatted = stringToNumber(number);
    return showDecimal
      ? numeral(formatted).format("0.00")
      : numeral(formatted).format("0");
  }

  return "-";
};
export const numberToFileSize = (number = 0) => {
  numeral.locale("idFiles");
  return numeral(number).format("0.0 a");
};

export const dateFromNowString = date => moment(date).fromNow();
export const dateFullString = date => moment(date).format("DD MMMM YYYY");
export const dateShortString = date => moment(date).format("DD MMM YYYY");
export const dateNoYearString = date => moment(date).format("DD MMM");
export const dateYearString = date => moment(date).format("YYYY");
export const dateShortTimeString = date =>
  moment(date).format("DD MMM 'YY, HH:mm");
