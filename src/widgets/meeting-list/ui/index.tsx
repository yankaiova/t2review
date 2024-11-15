import { useCalendar } from "@/entities/meeting";
import { MeetingItem, type Meeting, meetingsApi } from "@/entities/meeting";
import { MeetingSettings } from "@/widgets/meeting-settings";
import { BaseTypography } from "@/shared/ui";
import { useAuth } from "@/entities/auth";

export const MeetingList = () => {
  const { date } = useCalendar();
  const { currentUser } = useAuth();
  if (!currentUser || !date) return;
  const { data } = meetingsApi.useGetAllMeetingUserQuery({
    expert_id: String(currentUser),
    date,
  });

  if (!data || data.length < 0) {
    return <BaseTypography>Нет встреч текущую дату</BaseTypography>;
  }
  return (
    <div>
      {data.map((item: Meeting) => (
        <MeetingItem key={item.meeting_id} meeting={item}>
          <MeetingSettings meeting_id={item.meeting_id} />
        </MeetingItem>
      ))}
    </div>
  );
};
