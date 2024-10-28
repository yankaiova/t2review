import dayjs from "dayjs";
export function dateView(date: string) {
  const dateParse = JSON.parse(date);
  return dayjs(dateParse).format(" DD MMMM YYYY");
}
