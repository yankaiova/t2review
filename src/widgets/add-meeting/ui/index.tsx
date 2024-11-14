import { BaseButton, BaseCard } from "@/shared/ui";
import { useSlot } from "@/entities/slot";
import { style, styleBoxCard } from "./styles";
import { teamsApi, Team } from "@/features/add-users-meeting";
//import { meetingsApi } from "@/entities/meeting";
import React, { lazy, useState } from "react";
import {
  TextField,
  Typography,
  FormControl,
  Container,
  Box,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { useAppDispatch, useDebounce } from "@/shared/lib/hooks";
import { cleanUsersTeam } from "@/entities/meeting";

const LazyAddUsers = lazy(() => import("@/features/add-users-meeting"));

export const AddMeeting = ({ children }: { children: React.ReactNode }) => {
  const { data } = teamsApi.useGetAllTeamsQuery();
  const dispatch = useAppDispatch();
  const [team, setTeam] = useState<string>("");
  const handleChangeTeams = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value);
    dispatch(cleanUsersTeam());
  };
  const debounceValue = useDebounce(team, 200);
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
    //user_ids:
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
        <Typography color="textDisabled" marginTop="20px">
          Выбор участников
        </Typography>
        <Select
          id="select-team"
          value={String(team)}
          onChange={handleChangeTeams}
        >
          {data &&
            data.map((item: Team) => (
              <MenuItem key={item.teamid} value={item.teamid}>
                {item.team_name}
              </MenuItem>
            ))}
        </Select>
        {/* {debounceValue && <LazyAddUsers team={debounceValue} />} */}
        {children}
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
