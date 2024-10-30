import { Card, CardContent, CardActions } from "@mui/material";
import { BaseButton, BaseCard } from "../../../shared/ui";
import { BaseSlot } from "../../../shared/model/types";
type PropsRecord = {
  slot: BaseSlot;
  handleClick: () => void;
};
export const Record = ({ slot, handleClick }: PropsRecord) => {
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
      <CardActions>
        <BaseButton text="Записаться" onClick={handleClick} />
      </CardActions>
    </Card>
  );
};
