import { useCalendar } from "@/entities/calendar";
import { Slot } from "@/shared/model/types";
import { SlotItem } from "@/entities/slot";
import { DeleteSlot } from "@/features/delete-slot";
import { BaseTypography } from "@/shared/ui";
import { Fragment } from "react";
import { slots } from "@/mocks";

export const SlotList = () => {
  const { date } = useCalendar();
  if (slots && slots.length === 0) {
    return <BaseTypography>Нет слотов текущую дату</BaseTypography>;
  }
  return (
    <>
      {slots.map((item: Slot) => (
        <Fragment key={item.slot_id}>
          {date === item.date && (
            <SlotItem
              key={item.slot_id}
              slot={item}
              actions={<DeleteSlot slot_id={item.slot_id} />}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};
