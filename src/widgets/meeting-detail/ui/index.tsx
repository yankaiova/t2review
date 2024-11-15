import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import {
  BaseBoxContainer,
  BaseCard,
  BaseTypography,
  TypographyStatus,
} from "@/shared/ui";
import { useParams } from "react-router-dom";
import { meetingsApi } from "@/entities/meeting";
import { Material, materialsApi } from "@/entities/material";
import { useUsers } from "../lib/hooks";

export const MeetingInfo = () => {
  const { meetingId } = useParams();
  if (!meetingId) return;

  const { data: materials } = materialsApi.useGetAllMaterialsByMeetingQuery(
    Number(meetingId)
  );
  const { data } = meetingsApi.useGetMeetingbyIdQuery(Number(meetingId));

  if (!data) return;

  const users = useUsers(Number(meetingId));

  return (
    <Stack direction="row" gap="30px">
      <Box style={{ maxWidth: "300px" }}>
        <BaseCard
          slot={{
            date: data.date,
            start_time: data.start_time,
            end_time: data.end_time,
            slot_type: data.meeting_type,
          }}
        />
        <BaseBoxContainer>
          <BaseTypography>Статус</BaseTypography>
          <TypographyStatus text={data.meeting_status} />
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Проводит</BaseTypography>
          {data.expert_id}
        </BaseBoxContainer>
      </Box>
      <Box style={{ marginTop: "10px" }}>
        <BaseTypography>Материалы</BaseTypography>
        <List>
          {materials &&
            materials.map((item: Material) => (
              <ListItem key={item.id + "material"}>
                <Typography color="#2FB3FF">{item.material_link}</Typography>
              </ListItem>
            ))}
        </List>
        <BaseTypography>Участники</BaseTypography>
        <List>
          {users &&
            users.map((item: string) => (
              <ListItem key={item + "user"}>
                <Typography color="#2FB3FF">{item}</Typography>
              </ListItem>
            ))}
        </List>
      </Box>
    </Stack>
  );
};
