import { Card, CardContent, CardActions } from "@mui/material";
import { BaseCard } from "@/shared/ui";
import { BaseSlot } from "@/shared/model/types";
type PropsRecord = {
  slot: BaseSlot;
  children: React.ReactNode;
};
export const Record = ({ slot, children }: PropsRecord) => {
  return (
    <Card>
      <CardContent>
        <BaseCard
          slot={{
            date: slot.date,
            start_time: slot.start_time,
            end_time: slot.end_time,
          }}
        />
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
