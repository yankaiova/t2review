import { BaseFormDialog } from "@/shared/ui";
import { TextField } from "@mui/material";
import { commentsApi } from "@/entities/comment";
import { useState } from "react";
import { useAuth } from "@/entities/auth";
import { useParams } from "react-router-dom";
import { useModal } from "@/shared/lib/hooks";
import SmsIcon from "@mui/icons-material/Sms";

export const AddComment = () => {
  const { open, openModal, closeModal } = useModal();
  const { meetingId } = useParams();
  const { currentUser } = useAuth();
  if (!currentUser || !meetingId) return;

  const [comment, setComment] = useState<string>("");

  const [addComment] = commentsApi.useAddCommentsMutation();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment({
      meeting_id: Number(meetingId),
      user_id: currentUser,
      comment_text: comment,
    });
    setComment("");
    closeModal();
  };

  return (
    <>
      <SmsIcon onClick={openModal} style={{ cursor: "pointer" }} />
      <BaseFormDialog
        handleClose={closeModal}
        open={open}
        onSubmit={onSubmit}
        textSubmit="Сохранить"
      >
        <TextField
          id="outlined-textarea"
          placeholder="Добавьте комментарий"
          value={comment}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setComment(e.target.value)}
          multiline
        />
      </BaseFormDialog>
    </>
  );
};
