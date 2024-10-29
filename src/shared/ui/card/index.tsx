import { BaseBoxContainer, BaseTypography } from "..";
import { Typography } from "@mui/material";
import { dateView } from "../../lib/helpers";
type BaseSlot = {
  date: string;
  start_time: string;
  end_time: string;
};
type PropsBaseCard = {
  slot: BaseSlot;
};
export const BaseCard = ({ slot }: PropsBaseCard) => {
  const dateV = dateView(slot.date);
  return (
    <>
      <BaseBoxContainer>
        <Typography variant="h5" component="div" color="text.main">
          День
        </Typography>
        <Typography variant="h5" component="div" color="text.main">
          {dateV}
        </Typography>
      </BaseBoxContainer>
      <BaseBoxContainer>
        <BaseTypography>Начало</BaseTypography>
        <BaseTypography>{slot.start_time}</BaseTypography>
      </BaseBoxContainer>
      <BaseBoxContainer>
        <BaseTypography>Конец</BaseTypography>
        <BaseTypography>{slot.end_time}</BaseTypography>
      </BaseBoxContainer>
    </>
  );
};
