export const convertDateToString = (day: Date) => {
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  return year + "년 " + month + "월 " + date + "일";
};
