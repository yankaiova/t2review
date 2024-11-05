import { BaseBoxContainer, BaseTypography } from "..";
import { Typography } from "@mui/material";
import { dateView } from "../../lib/helpers";
import { BaseSlot } from "@/shared/model/types";

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
      <BaseBoxContainer>
        <BaseTypography>Формат</BaseTypography>
        <BaseTypography>{slot.slot_type}</BaseTypography>
      </BaseBoxContainer>
    </>
  );
};
