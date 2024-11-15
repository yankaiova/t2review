import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { CommentItem, Comment, commentsApi } from "@/entities/comment";
import { NameUser } from "@/features/user-name";
import { Stack } from "@mui/material";

export const CommentList = () => {
  const { meetingId } = useParams();
  const { data } = commentsApi.useGetAllCommentsByMeetingQuery(
    Number(meetingId)
  );
  console.log(data);
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
