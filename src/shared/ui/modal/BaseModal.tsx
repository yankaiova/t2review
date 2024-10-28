import { Modal } from "@mui/material";
import { BaseBox } from "../box/BaseBox";
import { useState } from "react";
import { BaseButton } from "..";

type PropsBaseModal = {
  eventName: string;
  children?: React.ReactNode;
};

export function BaseModal({ eventName, children }: PropsBaseModal) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BaseButton text={eventName} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <BaseBox>{children}</BaseBox>
      </Modal>
    </div>
  );
}
