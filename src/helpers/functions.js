// import axios from "axios";

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

export const time24hrFormatString = () => {
  // Crear una instancia de Date
  const now = new Date();

  // Obtener las horas, minutos y segundos
  let hours = now.getHours(); // Obtener las horas (0-23)
  let minutes = now.getMinutes(); // Obtener los minutos (0-59)
  let seconds = now.getSeconds(); // Obtener los segundos (0-59)

  // Formatear las partes de la hora si es necesario (agregar ceros a la izquierda si son menores que 10)
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // Crear una cadena de hora en formato de 24 horas (HH:mm:ss)
  const time24hrFormat = `${hours}:${minutes}:${seconds}`;

  // console.log(time24hrFormat.toLocaleTimeString());
  console.log(time24hrFormatString());
};

// later create another file for this function
// export const randomQuote = async () => {
//   try {
//     const res = await axios.get("https://api.quotable.io/random");
//     const quote = res.data;
//     // console.log(quote);
//     return quote;
//   } catch (error) {
//     console.log(error);
//   }
// };

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

// Date.prototype.getWeek = function () {
//   let date = new Date(this.getTime());
//   date.setHours(0, 0, 0, 0);
//   // Thursday in current week decides the year.
//   date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
//   // January 4 is always in week 1.
//   let week1 = new Date(date.getFullYear(), 0, 4);
//   // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//   return (
//     1 +
//     Math.round(
//       ((date.getTime() - week1.getTime()) / 86400000 -
//         3 +
//         ((week1.getDay() + 6) % 7)) /
//         7
//     )
//   );
// };

// Date.prototype.getWeekYear = function () {
//   let date = new Date(this.getTime());
//   date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
//   return date.getFullYear();
// };
