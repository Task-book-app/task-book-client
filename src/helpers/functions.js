import axios from "axios";

export const today = () => {
  const date = new Date();
  const nativeDay = date.getDate();
  const nativeMonth = date.getMonth() + 1;
  const day = nativeDay < 10 ? `0${nativeDay}` : nativeDay;
  const month = nativeMonth < 10 ? `0${nativeMonth}` : nativeMonth;
  return `${date.getFullYear()}-${month}-${day}`;
};

export const longDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const month = months[date.getMonth()];

  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

// later create another file for this function
export const setStateQuote = async (setState) => {
  try {
    const res = await axios.get("https://type.fit/api/quotes");
    const quotes = res.data;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setState(randomQuote);
  } catch (error) {
    console.log(error);
  }
};

Date.prototype.getWeek = function () {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  let week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

Date.prototype.getWeekYear = function () {
  let date = new Date(this.getTime());
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  return date.getFullYear();
};
