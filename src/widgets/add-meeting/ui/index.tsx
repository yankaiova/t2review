import { Typography, FormControl } from "@mui/material";
import { BaseButton, BaseCard } from "../../../shared/ui";
import { useSlotByRecord } from "../../../entities/record";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Materials } from "../../set-materials";
import { style } from "./styles";
import { slotsApi } from "../../../entities/slot";
import { meetingsApi } from "../../../entities/meeting";

export const AddMeeting = () => {
  const [createNewMeeting] = meetingsApi.useCreateMeetingMutation();
  const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();

  const { meetingAtribiutes } = useSlotByRecord();
  const { expert_id, slot_id, start_time, end_time, date, meeting_type } =
    meetingAtribiutes;

  const [materials, setMaterials] = useState<string[]>([]);

  const createMeeting = () => {
    createNewMeeting({
      slot_id,
      start_time,
      end_time,
      meeting_type,
    }).then(() => updateSlotAvalible({ slot_id: slot_id, is_avalible: false }));
  };
  return (
    <>
      <BaseCard slot={{ date, start_time, end_time }} />
      <Typography color="#2FB3FF">Встреча онлайн на 60 минут</Typography>
      <FormControl sx={style}>
        <Materials materials={materials} setMaterials={setMaterials} />
        <TextField
          id="outlined-textarea"
          label="Описание"
          placeholder="Добавьте описание"
          multiline
        />
        <BaseButton text="Сохранить" onClick={createMeeting} />
      </FormControl>
    </>
  );
};
