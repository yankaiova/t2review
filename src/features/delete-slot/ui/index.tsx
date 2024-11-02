import { Button, DialogContent } from "@mui/material";
import { AlertDialog } from "@/shared/ui";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export const DeleteSlot = ({ slot_id }: { slot_id: number }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteSlot = () => {
    console.log(slot_id);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <DeleteIcon color="primary" />
      </Button>
      <AlertDialog open={open} handleClose={handleClose} onSubmit={deleteSlot}>
        <DialogContent>Вы уверены, что хотите отменить встречу?</DialogContent>
      </AlertDialog>
    </>
  );
};
