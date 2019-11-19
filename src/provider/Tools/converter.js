// eslint-disable-next-line import/prefer-default-export
import "moment/locale/id";

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

export const stringToColor = s => {
  const str = unescape(encodeURIComponent(s));
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
};
