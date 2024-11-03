import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCalendar } from "../lib/hook";
import { useState } from "react";
import dayjs from "dayjs";
import { style } from "./index.style";
import { dateToFormat } from "../lib/dateToFormat";

export const Calendar = () => {
  const { setNewDate } = useCalendar();
  const today = Date.now();
  const [value, setValue] = useState<dayjs.Dayjs>(dayjs(today));
  function setDate(newValue: dayjs.Dayjs) {
    setValue(newValue);
    const dateString = dateToFormat(newValue);
    setNewDate(dateString);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={style}
        value={dayjs(value)}
        onChange={(newValue: dayjs.Dayjs) => setDate(newValue)}
        views={["year", "month", "day"]}
      />
    </LocalizationProvider>
  );
};
