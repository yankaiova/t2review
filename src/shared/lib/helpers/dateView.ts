import dayjs from "dayjs";
export function dateView(date: string) {
  return dayjs(date).format(" DD.MM.YYYY");
}
