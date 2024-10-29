import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Slot } from "../../../shared/model/types";
import { style } from "./styles";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type PropsSlotItem = { slot: Slot; actions?: React.ReactNode };
export const SlotItem = ({ slot, actions }: PropsSlotItem) => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate(`/slot/${slot.slot_id}/edit`);
  };

  return (
    <Stack sx={style}>
      <Typography variant="body2" color="text.secondary">
        {String(slot.start_time)} - {String(slot.end_time)}
      </Typography>
      <Button onClick={handleClickEdit}>
        <EditOutlinedIcon />
      </Button>
      {actions}
    </Stack>
  );
};
