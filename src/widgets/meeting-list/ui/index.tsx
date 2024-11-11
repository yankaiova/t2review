import { Meeting } from "@/shared/model/types";
import { useCalendar } from "@/entities/meeting";
import { MeetingItem } from "@/entities/meeting";
import { meetings } from "@/mocks";
import { MeetingSettings } from "@/widgets/meeting-settings";
import { BaseTypography } from "@/shared/ui";
import { Fragment } from "react";

export const MeetingList = () => {
  const { date } = useCalendar();
  if (meetings && meetings.length === 0) {
    return <BaseTypography>Нет встреч текущую дату</BaseTypography>;
  }
  return (
    <div>
      {meetings.map((item: Meeting) => (
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
