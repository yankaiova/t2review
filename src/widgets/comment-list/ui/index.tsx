import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { CommentItem, commentsApi } from "@/entities/comment";
import { Comment } from "@/shared/model/types";
import { NameUser } from "@/features/user-name";
import { comments } from "@/mocks";
import { Box, Stack } from "@mui/material";

export const CommentList = () => {
  const { meetingId } = useParams();
  const data = comments.filter((item) => item.meeting_id === Number(meetingId));
  // const { data } = commentsApi.useGetAllCommentsByMeetingQuery(
  //   Number(meetingId)
  // );
  if (!data) {
    return <BaseTypography>Пока нет комментариев</BaseTypography>;
  }
  return (
    <Stack direction="column" gap="10px">
      {data.map((item: Comment) => (
        <CommentItem comment={item} key={item.comment_id}>
          <NameUser user_id={item.user_id} />
        </CommentItem>
      ))}
    </Stack>
  );
};
