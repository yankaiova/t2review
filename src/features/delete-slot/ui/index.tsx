import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BaseFormDialog, BaseTypography } from "@/shared/ui";
import { useModal } from "@/shared/lib/hooks";

export const DeleteSlot = ({ slot_id }: { slot_id: number }) => {
  const { open, openModal, closeModal } = useModal();
  const deleteSlot = () => {
    console.log(slot_id);
  };

  return (
    <>
      <Button onClick={openModal}>
        <DeleteIcon color="primary" />
      </Button>
      <BaseFormDialog
        open={open}
        handleClose={closeModal}
        onSubmit={deleteSlot}
        textSubmit="Подтвердить"
      >
        <BaseTypography>Вы уверены, что хотите удалить слот?</BaseTypography>
      </BaseFormDialog>
    </>
  );
};
