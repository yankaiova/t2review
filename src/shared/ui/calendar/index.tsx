import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { style } from "./index.style";

export const BaseCalendar = ({ value, setValue }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={style}
        value={value}
        onChange={(newValue: dayjs.Dayjs) => setValue(newValue)}
        views={["year", "month", "day"]}
      />
    </LocalizationProvider>
  );
};
