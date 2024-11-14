import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import {
  BaseBoxContainer,
  BaseCard,
  BaseTypography,
  TypographyStatus,
} from "@/shared/ui";
import { useParams } from "react-router-dom";
// import { meetingsApi } from "@/entities/meeting";
// import { CommentList } from "@/widgets/comment-list";
import { NameUser } from "@/features/user-name";
import { meetings } from "@/mocks";

export const MeetingInfo = () => {
  const { meetingId } = useParams();
  const data = meetings.find((item) => item.meeting_id === Number(meetingId));
  // const { data } = meetingsApi.useGetMeetingbyIdQuery(Number(meetingId));

  if (!data) return;

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
          <NameUser user_id={data.expert_id} />
        </BaseBoxContainer>
      </Box>
      <Box style={{ marginTop: "10px" }}>
        <BaseTypography>Материалы</BaseTypography>
        <List>
          {data.materials.map((item: string) => (
            <ListItem key={item}>
              <Typography color="#2FB3FF">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
};
