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

export const refreshPageAtNewDay = () => {
  setInterval(() => {
    let date = new Date();
    let nowHour = date.getHours();
    let nowMinuts = date.getMinutes();
    let nowSeconds = date.getSeconds();

    // console.log(
    //   "Hour " + nowHour + " Minutes " + nowMinuts + " Secunds " + nowSeconds
    // );

    if (nowHour === 23 && nowMinuts === 59 && nowSeconds === 59) {
      window.location.reload();
    }
  }, 1000);
};

// export const getMediaQuery = (longMediaQuery) => {
//   const regex = /\(([^)]+)\)/;
//   const match = longMediaQuery.match(regex);
//   return match ? match[0] : null;
// };
// console.log(getMediaQuery(`@media only screen and (min-width: 64em)`));
