import dayjs from "dayjs";
export function calculateEndTime(date: string, endTime: string, time: number) {
  const newDateTime = dayjs()
    .set("year", Number(date.slice(-4)))
    .set("month", Number(date.slice(3, 5)))
    .set("date", Number(date.slice(0, 2)))
    .set("hour", Number(endTime.slice(0, 2)))
    .set("minute", Number(endTime.slice(3, 5)))
    .set("second", 0);
  const temp = newDateTime.add(time, "minutes");
  return dayjs(temp).format("HH:mm");
}
