import { Typography, Switch, SelectChangeEvent } from "@mui/material";
import { useCalendar } from "@/entities/calendar/lib/hook";
import {
  BaseButton,
  BaseFormDialog,
  BaseTypography,
  BaseBoxContainer,
} from "@/shared/ui";
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { slotsApi } from "@/entities/slot";
import { calculateEndTime, dateView } from "@/shared/lib/helpers";
import { timer, startSlots } from "@/shared/lib/constants";
import { AuthContext } from "@/shared/context";

export const AddSlot = () => {
  const { user_id } = useContext(AuthContext);
  const [createNewSlot] = slotsApi.useCreateSlotMutation();

  const { date } = useCalendar();
  const dateV = dateView(date);

  const [startTime, setStartTime] = useState<string>(startSlots[0]);
  const [checked, setChecked] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<string>(startTime);
  const [time, setTime] = useState<string>(String(timer[0]));

  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewSlot({
      user_id: user_id,
      start_time: startTime,
      end_time: endTime,
      slot_type: checked ? "offline" : "online",
    });
  };

  useEffect(() => {
    const t = calculateEndTime(JSON.parse(date), startTime, Number(time));
    setEndTime(t);
  }, [time, startTime]);

  return (
    <>
      <BaseButton text="Добавить слот" onClick={handleClickOpen} />
      <BaseFormDialog handleClose={handleClose} open={open} onSubmit={onSubmit}>
        <>
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
                onChange={(e: SelectChangeEvent<string>) =>
                  setStartTime(e.target.value)
                }
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
            <Select
              id="slot-t-select"
              value={time}
              onChange={(e: SelectChangeEvent) => setTime(e.target.value)}
            >
              {timer.map((item: number) => (
                <MenuItem key={"slot" + item} value={item}>
                  {item + "м"}
                </MenuItem>
              ))}
            </Select>
          </BaseBoxContainer>
          <BaseBoxContainer>
            <BaseTypography>online</BaseTypography>
            <Switch
              checked={checked}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setChecked(e.target.checked)
              }
              inputProps={{ "aria-label": "controlled" }}
            />
            <BaseTypography>offline</BaseTypography>
          </BaseBoxContainer>
        </>
      </BaseFormDialog>
    </>
  );
};
