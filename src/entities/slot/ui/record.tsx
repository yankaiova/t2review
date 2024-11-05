import { Card, CardContent, CardActions } from "@mui/material";
import { BaseCard } from "@/shared/ui";
import { BaseSlot } from "@/shared/model/types";
type PropsRecord = {
  slot: BaseSlot;
  children: React.ReactNode;
};
export const Record = ({ slot, children }: PropsRecord) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <BaseCard
          slot={{
            date: slot.date,
            start_time: slot.start_time,
            end_time: slot.end_time,
            slot_type: slot.slot_type,
          }}
        />
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
