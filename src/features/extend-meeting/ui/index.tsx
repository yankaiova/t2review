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
import { meetingsApi } from "@/entities/meeting";
import { slotsApi } from "@/entities/slot";
import { TIMER } from "@/shared/lib/constants";
import { Meeting } from "@/entities/meeting";
import { useModal } from "@/shared/lib/hooks";

type PropsExtendMeeting = { meeting: Meeting };
export const ExtendMeeting = (props: PropsExtendMeeting) => {
  const { open, openModal, closeModal } = useModal();
  const [time, setTime] = useState<string>(String(TIMER[0]));
  const { meeting } = props;
  const [newEnd, setNewEnd] = useState<string>(meeting.end_time);

  const [updateEndTime] = meetingsApi.useUpdateTimeMeetingMutation();
  const [updateSlotEndTime] = slotsApi.useUpdateSlotEndTimeMutation();

  const onSubmit = () => {
    updateEndTime({ meeting_id: meeting.meeting_id, end_time: newEnd }).then(
      () => updateSlotEndTime({ slot_id: meeting.slot_id, end_time: newEnd })
    );
    closeModal();
  };

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
