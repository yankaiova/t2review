import { Typography, Card, CardContent } from "@mui/material";
import { Comment } from "@/shared/model/types";

type PropsCommentItem = { comment: Comment; children: React.ReactNode };
export const CommentItem = ({ comment, children }: PropsCommentItem) => {
  return (
    <Card>
      <CardContent>
        <Typography component="div">{comment.create_time}</Typography>
        {children}
        <Typography variant="body2">{comment.comment_text}</Typography>
      </CardContent>
    </Card>
  );
};
