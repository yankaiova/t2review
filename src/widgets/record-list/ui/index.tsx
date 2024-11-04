import Grid from "@mui/material/Grid2";
import { Slot } from "@/shared/model/types";
import { Record } from "@/entities/slot";
import { CreateRecordButton } from "@/features/create-record";
import { BaseTypography } from "@/shared/ui";
import { slots } from "@/mocks";

export const RecordsByExpert = () => {
  if (slots.length === 0) {
    return <BaseTypography>Нет свободных записей</BaseTypography>;
  }
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
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
