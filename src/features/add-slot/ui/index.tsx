import { FormControl, Typography, Switch } from "@mui/material";
import { useCalendar } from "../../../entities/calendar/lib/hook";
import {
  BaseButton,
  BaseModal,
  BaseTypography,
  BaseBoxContainer,
} from "../../../shared/ui";
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { calculateEndTime, dateView } from "../../../shared/lib/helpers";

export const AddSlot = () => {
  const style = { display: "flex", flexDirection: "column", gap: "15px" };
  const startSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
  ];
  const timer: number[] = [30, 60];
  const { date } = useCalendar();
  const dateV = dateView(date);
  const [startTime, setStartTime] = useState<string>(startSlots[0]);
  const handleChangeStart = (event: any) => {
    setStartTime(event.target.value);
  };

  const [time, setTime] = useState<number>(timer[0]);
  const handleChangeTime = (event: any) => {
    setTime(event.target.value);
  };
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const [endTime, setEndTime] = useState<string>(startTime);

  useEffect(() => {
    const t = calculateEndTime(JSON.parse(date), startTime, time);
    setEndTime(t);
  }, [time, startTime]);

  return (
    <BaseModal eventName="добавить слот">
      <FormControl sx={style}>
        <BaseBoxContainer>
          <Typography variant="h5" component="div" color="text.main">
            День
          </Typography>
          <Typography variant="h5" component="div" color="text.main">
            {dateV}
          </Typography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Начало</BaseTypography>
          <BaseTypography>
            {" "}
            <Select
              id="slot-add-select"
              value={startTime}
              onChange={handleChangeStart}
            >
              {startSlots.map((item: string) => (
                <MenuItem key={"slot" + item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </BaseTypography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Конец</BaseTypography>
          <BaseTypography>{endTime}</BaseTypography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <Typography color="#2FB3FF">Слот на</Typography>
          <Select id="slot-t-select" value={time} onChange={handleChangeTime}>
            {timer.map((item: number) => (
              <MenuItem key={"slot" + item} value={item}>
                {item + "м"}
              </MenuItem>
            ))}
          </Select>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <Switch
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography>{checked === true ? "offline" : "online"}</Typography>
        </BaseBoxContainer>
        <BaseButton text="Сохранить" />
      </FormControl>
    </BaseModal>
  );
};
