import { DialogContent, MenuItem } from "@mui/material";
import { meetingsApi } from "@/entities/meeting";
import { slotsApi } from "@/entities/slot";
import { useModal } from "@/shared/lib/hooks";
import { BaseTypography, BaseFormDialog } from "@/shared/ui";

type PropsCancelMeeting = {
  meeting_id: number;
  slot_id: number;
};

export const CancelMeeting = (props: PropsCancelMeeting) => {
  const { meeting_id, slot_id } = props;
  const [updateStatus] = meetingsApi.useSetMeetingStatusMutation();
  const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();

  const { open, openModal, closeModal } = useModal();

  const cancelMeeting = () => {
    console.log("отмена");
    // updateStatus({ meeting_id: meeting_id, status: "canceled" }).then(() =>
    //   updateSlotAvalible({ slot_id: slot_id, is_avalible: true })
    // );
  };

  return (
    <>
      <MenuItem onClick={openModal}>
        <BaseTypography>Отменить</BaseTypography>
      </MenuItem>
      <BaseFormDialog
        open={open}
        handleClose={closeModal}
        onSubmit={cancelMeeting}
        textSubmit="Подтвердить"
      >
        <DialogContent>Вы уверены, что хотите отменить встречу?</DialogContent>
      </BaseFormDialog>
    </>
  );
};
