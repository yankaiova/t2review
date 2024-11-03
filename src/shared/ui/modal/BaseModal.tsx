import { Modal, Box, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { modal, iconButton } from "./styles";
import { BaseTypography } from "..";
type PropsBaseModal = {
  eventName: string;
  children?: React.ReactNode;
};

export function BaseModal({ children, eventName }: PropsBaseModal) {
  const [isModal, setIsModal] = useState<boolean>(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <Box component="div">
      <MenuItem onClick={openModal}>
        <BaseTypography>{eventName}</BaseTypography>
      </MenuItem>
      <Modal open={isModal} onClose={closeModal}>
        <Box sx={modal}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
          <CloseIcon onClick={closeModal} sx={iconButton} />
        </Box>
      </Modal>
    </Box>
  );
}
