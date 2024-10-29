import { Modal, Box } from "@mui/material";
import { BaseBox } from "../box/BaseBox";
import CloseIcon from "@mui/icons-material/Close";
import { modal, modalBig } from "./styles";
type PropsBaseModal = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  isUseDefaultStyles?: boolean;
};

export function BaseModal({
  children,
  isUseDefaultStyles = true,
  open,
  handleClose,
}: PropsBaseModal) {
  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={[isUseDefaultStyles && modal, !!modalBig && modalBig]}>
          <CloseIcon onClick={handleClose} />
          <BaseBox>{children}</BaseBox>
        </Box>
      </Modal>
    </Box>
  );
}
