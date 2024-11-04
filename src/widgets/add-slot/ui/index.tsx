import {
  Typography,
  Switch,
  SelectChangeEvent,
  Box,
  TextField,
} from "@mui/material";
import { useCalendar } from "@/entities/calendar";
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
import { TIMER } from "@/shared/lib/constants";
import { AuthContext } from "@/shared/context";
import { style } from "./styles";
import { useModal } from "@/shared/lib/hooks";

export const AddSlot = () => {
  const { open, openModal, closeModal } = useModal();
  const { user_id } = useContext(AuthContext);
  const [createNewSlot] = slotsApi.useCreateSlotMutation();

  const { date } = useCalendar();
  const dateV = dateView(date);

  const [start_time, setStart_time] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<string>("");
  const [time, setTime] = useState<string>(String(TIMER.HOUR_0_5));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user_id) {
      createNewSlot({
        creator_id: user_id,
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
        <Box sx={{ width: "260px", padding: "40px" }}>
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
                <MenuItem key={"slot" + value} value={value}>
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
