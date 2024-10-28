import dayjs from "dayjs";

export const dateToFormat = (date: dayjs.Dayjs | number) => {
  return dayjs(date).format("DD-MM-YYYY");
};
