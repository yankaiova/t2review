import { BaseButton, BaseFormDialog } from "@/shared/ui";
import { TextField } from "@mui/material";
import { commentsApi } from "@/entities/comment";
import { useContext, useState } from "react";
import { AuthContext } from "@/shared/context";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

export const AddComment = () => {
  const { meeting_id } = useParams();
  const id = Number(meeting_id);

  const { user_id } = useContext(AuthContext);

  const [open, setOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  const [addComment] = commentsApi.useAddCommentsMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const create_time = String(dayjs());
    addComment({ meeting_id: id, user_id, create_time, comment_text: comment });
  };

  return (
    <>
      <BaseButton text="Добавить комментарий" onClick={handleClickOpen} />
      <BaseFormDialog handleClose={handleClose} open={open} onSubmit={onSubmit}>
        <TextField
          id="outlined-textarea"
          label="Описание"
          placeholder="Добавьте описание"
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
