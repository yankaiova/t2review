import {
  FormControl,
  Typography,
  Switch,
  SelectChangeEvent,
} from "@mui/material";
import { useCalendar } from "../../../entities/calendar/lib/hook";
import {
  BaseButton,
  BaseModal,
  BaseTypography,
  BaseBoxContainer,
} from "../../../shared/ui";
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { slotsApi } from "../../../entities/slot";
import { calculateEndTime, dateView } from "../../../shared/lib/helpers";
import { timer, startSlots } from "../../../shared/lib/constants";
import { style } from "./styles";
import { AuthContext } from "../../../shared/context";

export const AddSlot = ({
  isModal,
  closeModal,
}: {
  isModal: boolean;
  closeModal: () => void;
}) => {
  const { user_id } = useContext(AuthContext);
  const [createNewSlot] = slotsApi.useCreateSlotMutation();

  const { date } = useCalendar();
  const dateV = dateView(date);

  const createSlot = () => {
    createNewSlot({
      user_id: user_id,
      start_time: startTime,
      end_time: endTime,
      slot_type: checked ? "offline" : "online",
    });
  };

  const [startTime, setStartTime] = useState<string>(startSlots[0]);
  const [checked, setChecked] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<string>(startTime);
  const [time, setTime] = useState<number>(timer[0]);
  const handleChangeTime = (event: any) => {
    setTime(event.target.value);
  };
  const handleCloseModal = () => {
    closeModal();
  };
  useEffect(() => {
    const t = calculateEndTime(JSON.parse(date), startTime, time);
    setEndTime(t);
  }, [time, startTime]);

  return (
    <BaseModal isModal={isModal} handleModalClose={handleCloseModal}>
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
          <Select id="slot-t-select" value={time} onChange={handleChangeTime}>
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
        <BaseButton text="Сохранить" onClick={createSlot} />
      </FormControl>
    </BaseModal>
  );
};
