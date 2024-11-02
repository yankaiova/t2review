import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
type PropsAlertDialog = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  onSubmit: () => void;
};
export const AlertDialog = ({
  open,
  handleClose,
  children,
  onSubmit,
}: PropsAlertDialog) => {
  const handleAgree = () => {
    handleClose();
    onSubmit();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleAgree} autoFocus>
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
