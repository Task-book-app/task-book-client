export const today = () => {
  const date = new Date();
  const nativeDay = date.getDate();
  const nativeMonth = date.getMonth() + 1;
  const day = nativeDay < 10 ? `0${nativeDay}` : nativeDay;
  const month = nativeMonth < 10 ? `0${nativeMonth}` : nativeMonth;
  return `${date.getFullYear()}-${month}-${day}`;
};
