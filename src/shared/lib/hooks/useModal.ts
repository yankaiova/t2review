import { useMemo, useState } from "react";

export const useModal = (isInitOpen = false) => {
  const [open, setOpen] = useState<boolean>(isInitOpen);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return useMemo(() => ({ open, openModal, closeModal }), [open]);
};
