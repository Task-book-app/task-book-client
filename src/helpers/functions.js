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
