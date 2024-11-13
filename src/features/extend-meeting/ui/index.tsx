import { Typography, FormControl } from "@mui/material";
import {
  BaseBoxContainer,
  BaseCard,
  BaseFormDialog,
  BaseTypography,
} from "@/shared/ui";
import { useEffect, useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { calculateEndTime } from "@/shared/lib/helpers";
//import { meetingsApi } from "@/entities/meeting";
//import { slotsApi } from "@/entities/slot";ss
import { TIMER } from "@/shared/lib/constants";
import { Meeting } from "@/shared/model/types";
import { useModal } from "@/shared/lib/hooks";

type PropsExtendMeeting = { meeting: Meeting };
export const ExtendMeeting = (props: PropsExtendMeeting) => {
  const { open, openModal, closeModal } = useModal();
  const { meeting } = props;
  // const [updateEndTime] = meetingsApi.useUpdateMeetingMutation();
  // const [updateSlotEndTime] = slotsApi.useUpdateSlotEndTimeMutation();

  const onSubmit = () => {
    // updateEndTime({ meeting_id, start_time, end_time: newEnd }).then(() =>
    //   updateSlotEndTime({ slot_id: slot_id, end_time: newEnd })
    // );
  };

  const [time, setTime] = useState<string>(String(TIMER.HOUR_0_5));
  const [newEnd, setNewEnd] = useState<string>(meeting.end_time);
  useEffect(() => {
    const value = calculateEndTime(
      meeting.date,
      meeting.end_time,
      Number(time)
    );
    setNewEnd(value);
  }, [time]);

  return (
    <>
      <MenuItem onClick={openModal}>
        <BaseTypography>Продлить</BaseTypography>
      </MenuItem>
      <BaseFormDialog
        onSubmit={onSubmit}
        open={open}
        handleClose={closeModal}
        textSubmit="Сохранить"
      >
        <BaseCard
          slot={{
            slot_type: "online",
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
              {Object.entries(TIMER).map(([key, value]) => (
                <MenuItem key={"slot" + key} value={value}>
                  {value + "м"}
                </MenuItem>
              ))}
            </Select>
          </BaseBoxContainer>
        </FormControl>
      </BaseFormDialog>
    </>
  );
};
