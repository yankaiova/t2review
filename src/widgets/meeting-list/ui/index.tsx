import { Meeting } from "@/shared/model/types";
import { useCalendar } from "@/entities/calendar";
import { MeetingItem } from "@/entities/meeting";
import { meetings } from "@/mocks";

export const MeetingList = () => {
  const { date } = useCalendar();
  if (meetings.length === 0) {
    return <div>Нет слотов текущую дату</div>;
  }
  return (
    <div>
      {meetings.map((item: Meeting) => (
        <MeetingItem key={item.meeting_id} meeting={item} />
      ))}
    </div>
  );
};
