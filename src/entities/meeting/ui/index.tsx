import { Stack } from "@mui/material";
import { BaseLink, BaseTypography, TypographyStatus } from "@/shared/ui";
import { Meeting } from "@/shared/model/types";

import { style } from "./styles";

type PropsMeetingItem = {
  meeting: Meeting;
  children: React.ReactNode;
};

export const MeetingItem = ({ meeting, children }: PropsMeetingItem) => {
  return (
    <Stack sx={style}>
      <BaseLink
        text={meeting.start_time + " - " + meeting.end_time}
        path={`/meeting/${meeting.meeting_id}`}
      />
      <TypographyStatus text={meeting.meeting_status} />
      {children}
    </Stack>
  );
};
