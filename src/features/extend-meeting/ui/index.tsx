import { Typography, FormControl } from "@mui/material";
import {
  BaseButton,
  BaseBoxContainer,
  BaseModal,
  BaseCard,
} from "../../../shared/ui";
import { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { calculateEndTime } from "../../../shared/lib/helpers";
import { meetingsApi } from "../../../entities/meeting";
const timer: number[] = [30, 60];

type PropsExtendMeeting = {
  meeting_id: number;
  date: string;
  start_time: string;
  end_time: string;
};
export const ExtendMeeting = ({
  meeting_id,
  date,
  start_time,
  end_time,
}: PropsExtendMeeting) => {
  const [updateEndTime, { isLoading }] = meetingsApi.useUpdateMeetingMutation();
  const [time, setTime] = useState<number>(timer[0]);
  const [newEnd, setNewEnd] = useState<string>(end_time);
  const handleChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const value = calculateEndTime(date, start_time, time);
    setNewEnd(value);
    updateEndTime({ meeting_id, start_time, end_time: newEnd });
  }, [time]);

  return (
    <BaseModal eventName="Продлить встречу">
      <BaseCard slot={{ date, start_time, end_time }} />
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
