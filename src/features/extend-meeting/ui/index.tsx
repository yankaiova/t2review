import { Typography, FormControl } from "@mui/material";
import { BaseButton, BaseBoxContainer, BaseModal } from "../../../shared/ui";
import { SlotCard } from "../../../entities/slot";
import { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { calculateEndTime } from "../../../shared/lib/helpers";
const timer: number[] = [30, 60];

type PropsExtendMeeting = {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
};
export const ExtendMeeting = ({
  id,
  date,
  start_time,
  end_time,
}: PropsExtendMeeting) => {
  const [time, setTime] = useState<number>(timer[0]);
  const [newEnd, setNewEnd] = useState<string>(end_time);
  const handleChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const value = calculateEndTime(date, start_time, time);
    setNewEnd(value);
  }, [time]);

  return (
    <BaseModal eventName="Продлить встречу">
      <SlotCard
        slot={{
          id: id,
          date: date,
          start_time: start_time,
          end_time: newEnd,
        }}
      />
      <FormControl>
        <BaseBoxContainer>
          <Typography color="#2FB3FF">Продлить встречу на</Typography>
          <Select id="slot-t-select" value={time} onChange={handleChangeTime}>
            {timer.map((item: number) => (
              <MenuItem key={"slot" + item} value={item}>
                {item + "м"}
              </MenuItem>
            ))}
          </Select>
        </BaseBoxContainer>
        <BaseButton text="Сохранить" />
      </FormControl>
    </BaseModal>
  );
};
