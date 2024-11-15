import Grid from "@mui/material/Grid2";
import { Record, slotsApi, type Slot } from "@/entities/slot";
import { CreateRecordButton } from "@/features/create-record";
import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";

export const RecordsByExpert = () => {
  const { expertId } = useParams();
  const { data: slots } = slotsApi.useGetSlotsbyExpertQuery(Number(expertId));
  // const { data: slots } = slotsApi.useGetSlotsbyExpertQuery(currentUser);
  if (!slots || slots.length < 1) {
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
