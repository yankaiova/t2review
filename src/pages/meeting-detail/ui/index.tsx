import { MeetingInfo } from "@/widgets/meeting-detail";
import { Container } from "@mui/material";
import { CommentList } from "@/widgets/comment-list";
import { AddComment } from "@/features/add-comment";
export const MeetingDetail = () => {
  return (
    <Container>
      <MeetingInfo />
      <CommentList />
      <AddComment />
    </Container>
  );
};
