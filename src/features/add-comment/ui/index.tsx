import { BaseFormDialog } from "@/shared/ui";
import { TextField } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import { commentsApi } from "@/entities/comment";
import { useContext, useState } from "react";
import { AuthContext } from "@/shared/context";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useModal } from "@/shared/lib/hooks";

export const AddComment = () => {
  const { open, openModal, closeModal } = useModal();
  const { meetingId } = useParams();
  const id = Number(meetingId);

  const { user_id } = useContext(AuthContext);

  const [comment, setComment] = useState<string>("");

  // const [addComment] = commentsApi.useAddCommentsMutation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const create_time = String(dayjs());
    // addComment({ meeting_id: id, user_id, create_time, comment_text: comment });
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
