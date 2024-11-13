import { BaseButton, BaseCard, BaseTypography } from "@/shared/ui";
import { useSlot } from "@/entities/slot";
import { style, styleBoxCard } from "./styles";
//import { meetingsApi } from "@/entities/meeting";
import { AddMaterial } from "@/features/add-material";
import { useMaterials } from "@/entities/material";
import { DeleteMaterial } from "@/features/delete-material";
import { useState } from "react";
import {
  TextField,
  Typography,
  FormControl,
  List,
  ListItem,
  Container,
  Box,
} from "@mui/material";
import { SelectUsers } from "@/features/suggestions-user";

export const MaterialList = () => {
  const { links } = useMaterials();
  console.log(links);
  if (!links) {
    return <BaseTypography>Материалы пока не добавлены</BaseTypography>;
  }
  return (
    <>
      <BaseTypography>Материалы</BaseTypography>
      <List>
        {links.map((item: string) => (
          <ListItem key={item}>
            <Typography color="#2FB3FF">{item}</Typography>
            <DeleteMaterial link={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const AddMeeting = () => {
  const [description, setDescription] = useState<string>("");
  // const [createNewMeeting] = meetingsApi.useCreateMeetingMutation();
  // const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();

  const { slotAtribiutes } = useSlot();
  const { slot_id, date, start_time, end_time, slot_type } = slotAtribiutes;

  const createMeeting = () => {
    // createNewMeeting({
    //   slot_id,
    //   start_time,
    //   end_time,
    //   meeting_type: slot_type,
    // }).then(() => updateSlotAvalible({ slot_id: slot_id, is_avalible: false }));
    console.log({
      slot_id,
      start_time,
      end_time,
      meeting_type: slot_type,
    });
    setDescription("");
  };
  return (
    <Container>
      <FormControl sx={style}>
        <Box sx={styleBoxCard}>
          <BaseCard slot={{ date, start_time, end_time, slot_type }} />
        </Box>
        <Typography color="#2FB3FF">Встреча онлайн на 60 минут</Typography>
        <Typography color="textDisabled">Выбор участников</Typography>
        <SelectUsers />
        <MaterialList />
        <AddMaterial />
        <TextField
          id="outlined-textarea"
          label="Описание"
          placeholder="Добавьте описание"
          value={description}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setDescription(e.target.value)}
          multiline
        />
        <Box>
          <BaseButton text="Сохранить" onClick={createMeeting} />
        </Box>
      </FormControl>
    </Container>
  );
};
