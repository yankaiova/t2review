import { useCalendar } from "../../../entities/slot/lib/useCalendar";
import { Slot } from "../../../shared/model/types";
import { SlotItem } from "../../../entities/slot";
import { DeleteSlot } from "../../../features/delete-slot";

const slots: Slot[] = [];
export const SlotList = () => {
  const { date } = useCalendar();
  if (slots.length === 0) {
    return <div style={{ marginBottom: "20px" }}>Нет слотов текущую дату</div>;
  }
  return (
    <>
      {slots.map((item: Slot) => (
        <SlotItem
          key={item.slot_id}
          slot={item}
          actions={<DeleteSlot slot_id={item.slot_id} />}
        />
      ))}
    </>
  );
};
