import { Typography, FormControl } from "@mui/material";
import { BaseButton, BaseBoxContainer, BaseModal, BaseCard } from "@/shared/ui";
import { useEffect, useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { calculateEndTime } from "@/shared/lib/helpers";
//import { meetingsApi } from "@/entities/meeting";
//import { slotsApi } from "@/entities/slot";ss
import { timer } from "@/shared/lib/constants";
import { Meeting } from "@/shared/model/types";

type PropsExtendMeeting = { meeting: Meeting };
export const ExtendMeeting = (props: PropsExtendMeeting) => {
  const { meeting } = props;
  // const [updateEndTime] = meetingsApi.useUpdateMeetingMutation();
  // const [updateSlotEndTime] = slotsApi.useUpdateSlotEndTimeMutation();
  const [time, setTime] = useState<string>(String(timer[0]));
  const [newEnd, setNewEnd] = useState<string>(meeting.end_time);
  useEffect(() => {
    const value = calculateEndTime(
      meeting.date,
      meeting.end_time,
      Number(time)
    );
    setNewEnd(value);
    // updateEndTime({ meeting_id, start_time, end_time: newEnd }).then(() =>
    //   updateSlotEndTime({ slot_id: slot_id, end_time: newEnd })
    // );
  }, [time]);

  return (
    <BaseModal eventName="Продлить">
      <BaseCard
        slot={{
          date: meeting.date,
          start_time: meeting.start_time,
          end_time: newEnd,
        }}
      />
      <FormControl>
        <BaseBoxContainer>
          <Typography color="#2FB3FF">Продлить встречу на</Typography>
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
        <BaseButton text="Сохранить" />
      </FormControl>
    </BaseModal>
  );
};
