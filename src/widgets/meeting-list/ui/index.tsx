import { Meeting } from "../../../shared/model/types";
import { useCalendar } from "../../../entities/slot/lib/useCalendar";
import { MeetingItem } from "../../../entities/meeting";
import dayjs from "dayjs";
const meetings: Meeting[] = [
  {
    meeting_id: 1,
    expert_id: 23,
    client_id: 344,
    slot_id: 6,
    start_time: "2022-09-09 12:30",
    end_time: "2022-09-09 13:30",
    meeting_type: "онлайн",
    meeting_status: "запланирована",
  },
  {
    meeting_id: 2,
    expert_id: 23,
    client_id: 344,
    slot_id: 8,
    start_time: "2022-09-09 15:30",
    end_time: "2022-09-09 16:00",
    meeting_type: "онлайн",
    meeting_status: "завершена",
  },
];
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
