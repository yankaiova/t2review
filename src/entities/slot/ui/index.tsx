import { Stack } from "@mui/material";
import { Slot } from "@/shared/model/types";
import { style } from "./styles";
import { BaseTypography } from "@/shared/ui";

type PropsSlotItem = { slot: Slot; actions?: React.ReactNode };
export const SlotItem = (props: PropsSlotItem) => {
  const { slot, actions } = props;

  if (!slot.is_availible) return;

  return (
    <Stack sx={style}>
      <BaseTypography>
        {slot.start_time} - {slot.end_time}
      </BaseTypography>
      <BaseTypography>доступен</BaseTypography>
      {actions}
    </Stack>
  );
};
