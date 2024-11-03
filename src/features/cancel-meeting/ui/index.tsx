import { DialogContent, MenuItem } from "@mui/material";
import { meetingsApi } from "@/entities/meeting";
import { slotsApi } from "@/entities/slot";
import { useState } from "react";
import { BaseTypography } from "@/shared/ui";
import { AlertDialog } from "@/shared/ui";

type PropsCancelMeeting = {
  meeting_id: number;
  slot_id: number;
};

export const CancelMeeting = (props: PropsCancelMeeting) => {
  const { meeting_id, slot_id } = props;
  const [updateStatus] = meetingsApi.useSetMeetingStatusMutation();
  const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();

  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cancelMeeting = () => {
    updateStatus({ meeting_id: meeting_id, status: "canceled" }).then(() =>
      updateSlotAvalible({ slot_id: slot_id, is_avalible: true })
    );
  };

  return (
    <>
      <MenuItem onClick={handleClickOpen}>
        <BaseTypography>Отменить</BaseTypography>
      </MenuItem>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        onSubmit={cancelMeeting}
      >
        <DialogContent>Вы уверены, что хотите отменить встречу?</DialogContent>
      </AlertDialog>
    </>
  );
};
