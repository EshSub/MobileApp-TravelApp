export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const tagToIconMap = (tag) => {
  const tagToIcon = {
    food: "🍔",
    drink: "🍺",
    shopping: "🛍️",
    sightseeing: "🏞️",
    activity: "🎢",
    transport: "🚗",
    accommodation: "🏨",
    event: "🎉",
  };

  if (!tagToIcon.hasOwnProperty(tag)) {
    return "📍";
  }

  return tagToIcon[tag];
};

export const randomSort = (a, b) => {
  return 0.5 - Math.random();
};

export const currentDateString = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getDateObjFromDateAndTime = (date, time) => {
  const dateObj = new Date(date + "T" + time);
  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

  console.log({ dateObj, timezoneOffset });

  dateObj.setTime(dateObj.getTime() - timezoneOffset);
  return dateObj;
};

export const sliceStringIfLong = (string, length = 20, ifNotString = "") => {
  if (!string) {
    return ifNotString;
  }

  if (string.length > length) {
    return string.slice(0, length) + "...";
  }

  return string;
};

export const humanReadableDateTimeFromObj = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
