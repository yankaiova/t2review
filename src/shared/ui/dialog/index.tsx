import Button from "@mui/material/Button";
import { DialogContent, DialogActions, Dialog } from "@mui/material";

type PropsBaseFormDialog = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  textSubmit: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
const contentStyle = { margin: "30px" };
const actionsStyle = { margin: "0 30px 20px" };
export const BaseFormDialog = ({
  open,
  handleClose,
  children,
  onSubmit,
  textSubmit,
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
      <DialogContent sx={contentStyle}>{children}</DialogContent>
      <DialogActions sx={actionsStyle}>
        <Button onClick={handleClose}>Отмена</Button>
        <Button type="submit">{textSubmit}</Button>
      </DialogActions>
    </Dialog>
  );
};
