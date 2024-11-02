import Button from "@mui/material/Button";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
type PropsBaseFormDialog = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const BaseFormDialog = ({
  open,
  handleClose,
  children,
  onSubmit,
}: PropsBaseFormDialog) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: onSubmit,
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button type="submit">Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
};
