import { Typography, Card, CardContent } from "@mui/material";
import { Comment } from "../model/types";
import dayjs from "dayjs";
type PropsCommentItem = { comment: Comment; children: React.ReactNode };
export const CommentItem = ({ comment, children }: PropsCommentItem) => {
  const date = String(dayjs(comment.date_created));

  return (
    <Card>
      <CardContent>
        <Typography component="div">{date}</Typography>
        {children}
        <Typography variant="body2">{comment.comment_text}</Typography>
      </CardContent>
    </Card>
  );
};
