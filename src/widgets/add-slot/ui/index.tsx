import {
  Typography,
  Switch,
  SelectChangeEvent,
  Box,
  TextField,
} from "@mui/material";
import { useCalendar } from "@/entities/meeting";
import {
  BaseButton,
  BaseFormDialog,
  BaseTypography,
  BaseBoxContainer,
} from "@/shared/ui";
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { slotsApi } from "@/entities/slot";
import { calculateEndTime, dateView } from "@/shared/lib/helpers";
import { TIMER } from "@/shared/lib/constants";
import { style, boxStyle } from "./styles";
import { useModal } from "@/shared/lib/hooks";
import { useAuth } from "@/entities/auth";

export const AddSlot = () => {
  const { open, openModal, closeModal } = useModal();
  const { currentUser } = useAuth();
  const [createNewSlot] = slotsApi.useCreateSlotMutation();

  const { date } = useCalendar();
  const dateV = dateView(date);

  const [start_time, setStart_time] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<string>("");
  const [time, setTime] = useState<string>(String(TIMER[0]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentUser) {
      createNewSlot({
        creator_id: currentUser,
        start_time,
        end_time: endTime,
        slot_type: checked ? "offline" : "online",
      });
    }
  };

  useEffect(() => {
    const t = calculateEndTime(date, start_time, Number(time));
    setEndTime(t);
  }, [time, start_time]);

  return (
    <Box sx={style}>
      <BaseButton text="Добавить слот" onClick={openModal} />
      <BaseFormDialog
        handleClose={closeModal}
        open={open}
        onSubmit={onSubmit}
        textSubmit="Сохранить"
      >
        <Box sx={boxStyle}>
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
            <TextField
              id="outlined-input-startslot"
              placeholder="12:00"
              value={start_time}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setStart_time(e.target.value)}
            />
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
              {Object.entries(TIMER).map(([key, value]) => (
                <MenuItem key={"slot" + key} value={value}>
                  {value + "м"}
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
        </Box>
      </BaseFormDialog>
    </Box>
  );
};
