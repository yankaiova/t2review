import dayjs from "dayjs";
export function calculateEndTime(
  date: string,
  startTime: string,
  time: number
) {
  const newDateTime = dayjs(date)
    .hour(Number(startTime.slice(0, 2)))
    .minute(Number(startTime.slice(3, 5)))
    .second(0);
  const temp = newDateTime.add(time, "minutes").minute();
  return dayjs(temp).format("DD-MM-YYYY");
}
