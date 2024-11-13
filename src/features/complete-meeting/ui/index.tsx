import { BaseFormDialog, BaseTypography } from "@/shared/ui";
import { useState } from "react";
import { meetingsApi } from "@/entities/meeting";
import { MenuItem, Typography, Rating } from "@mui/material";
import { useModal } from "@/shared/lib/hooks";

export const CompleteMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const { open, openModal, closeModal } = useModal();
  const [value, setValue] = useState<number | null>(5);
  const setRating = (e: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
    console.log(newValue, e.currentTarget);
  };
  const [updateStatus] = meetingsApi.useSetMeetingStatusMutation();
  const completeMeeting = () => {
    updateStatus({ meeting_id: meeting_id, status: "completed" });
  };

  return (
    <>
      <MenuItem onClick={openModal}>
        <BaseTypography>Завершить</BaseTypography>
      </MenuItem>
      <BaseFormDialog
        onSubmit={completeMeeting}
        open={open}
        handleClose={closeModal}
        textSubmit={"Завершить"}
      >
        <Typography component="legend">Oцените встречу</Typography>
        <Rating name="simple-controlled" value={value} onChange={setRating} />
      </BaseFormDialog>
    </>
  );
};
