import { useCalendar } from "@/entities/meeting";
import { SlotItem, slotsApi, type Slot } from "@/entities/slot";
import { DeleteSlot } from "@/features/delete-slot";
import { BaseTypography } from "@/shared/ui";
import { Fragment } from "react";
import { useAuth } from "@/entities/auth";

export const SlotList = () => {
  const { currentUser } = useAuth();
  const { date } = useCalendar();
  if (!date || !currentUser) return;
  const { data } = slotsApi.useGetSlotsbyExpertAndDateQuery({
    creator_id: currentUser,
    date,
  });

  if (!data || data.length < 0) {
    return <BaseTypography>Нет слотов текущую дату</BaseTypography>;
  }

  return (
    <>
      {data.map((item: Slot) => (
        <Fragment key={item.slot_id}>
          <SlotItem
            key={item.slot_id}
            slot={item}
            actions={<DeleteSlot slot_id={item.slot_id} />}
          />
        </Fragment>
      ))}
    </>
  );
};
