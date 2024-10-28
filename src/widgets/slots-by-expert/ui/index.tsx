import { useCalendar } from "../../../entities/slot/lib/useCalendar";
import { Slot } from "../../../shared/model/types";
import { Record } from "../../../entities/record";
import { useRecord } from "../../../entities/record/lib/useRecord";
const slots: Slot[] = [];
export const RecordsByExpert = () => {
  const { date } = useCalendar();
  const { handleClick } = useRecord({
    id: 1,
    date: "12.10.2024",
    start_time: "12:00",
    end_time: "13:00",
  });
  if (slots.length === 0) {
    return <div style={{ marginBottom: "20px" }}>Нет слотов текущую дату</div>;
  }
  return (
    <>
      {/* <ExpertDetail /> */}
      {slots.map((item: Slot) => (
        <Record
          slot={{
            id: 1,
            date: "12.10.2024",
            start_time: "12:00",
            end_time: "13:00",
          }}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};
