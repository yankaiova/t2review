import { useMaterials } from "@/entities/meeting";
import { useModal } from "@/shared/lib/hooks";
import { BaseButton, BaseFormDialog } from "@/shared/ui";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

export const AddMaterial = () => {
  const { addLink } = useMaterials();
  const { open, openModal, closeModal } = useModal();

  const [link, setLink] = useState<string>("");
  const handleClickAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLink(link);
    setLink("");
    closeModal();
  };
  return (
    <Box>
      <BaseButton text="Добавить" onClick={openModal} />
      <BaseFormDialog
        open={open}
        handleClose={closeModal}
        onSubmit={handleClickAdd}
        textSubmit="Сохранить"
      >
        <TextField
          id="outlined-textarea-link"
          placeholder="Добавьте материал"
          value={link}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setLink(e.target.value)}
        />
      </BaseFormDialog>
    </Box>
  );
};
