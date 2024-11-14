import { Meeting } from "@/shared/model/types";
import { useCalendar } from "@/entities/meeting";
import { MeetingItem } from "@/entities/meeting";
import { meetings } from "@/mocks";
import { MeetingSettings } from "@/widgets/meeting-settings";
import { BaseTypography } from "@/shared/ui";
import { Fragment } from "react";
import { useAuth } from "@/entities/auth";

export const MeetingList = () => {
  const { date } = useCalendar();
  const { currentUser } = useAuth();
  if (!currentUser || !date) return;

  const data = meetings.filter(
    (item) =>
      (item.client_id.includes(currentUser) ||
        item.expert_id === currentUser) &&
      item.date === date
  );

  if (data && data.length === 0) {
    return <BaseTypography>Нет встреч текущую дату</BaseTypography>;
  }
  return (
    <div>
      {data.map((item: Meeting) => (
        <Fragment key={item.meeting_id + "meet"}>
          {date === item.date && (
            <MeetingItem key={item.meeting_id} meeting={item}>
              <MeetingSettings meeting_id={item.meeting_id} />
            </MeetingItem>
          )}
        </Fragment>
      ))}
    </div>
  );
};
