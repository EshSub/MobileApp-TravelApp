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
}


