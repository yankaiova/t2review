import { Container } from "@mui/material";
import { BaseBoxContainer, BaseCard, BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { meetingsApi } from "@/entities/meeting";
import { AddComment } from "@mui/icons-material";
import { CommentList } from "@/widgets/comment-list";
import { NameUser } from "@/widgets/user-name";

export const MeetingInfo = () => {
  const { meetingId } = useParams();
  const { data } = meetingsApi.useGetMeetingbyIdQuery(Number(meetingId));

  if (!data) return;

  return (
    <Container>
      <BaseCard
        slot={{
          date: data.date,
          start_time: data.start_time,
          end_time: data.end_time,
        }}
      />
      <BaseTypography>{data.meeting_status}</BaseTypography>
      <BaseBoxContainer>
        <BaseTypography>Проводит</BaseTypography>
        <NameUser user_id={data.user_id} />
      </BaseBoxContainer>
      <BaseTypography>Комментарии</BaseTypography>
      <CommentList />
      <AddComment />
    </Container>
  );
};
