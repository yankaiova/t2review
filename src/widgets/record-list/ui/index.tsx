import Grid from "@mui/material/Grid2";
import { Slot } from "@/shared/model/types";
import { Record } from "@/entities/record";
import { CreateRecordButton } from "@/features/create-record";
import { BaseTypography } from "@/shared/ui";

const slots: Slot[] = [];
export const RecordsByExpert = () => {
  if (slots.length === 0) {
    return <BaseTypography>Нет свободных записей</BaseTypography>;
  }
  return (
    <Grid container columns={{ xs: 1, sm: 2 }}>
      {slots.map((item: Slot) => (
        <Grid key={item.slot_id + "gr"} size={1}>
          <Record slot={item}>
            <CreateRecordButton slot={item} />
          </Record>
        </Grid>
      ))}
    </Grid>
  );
};
