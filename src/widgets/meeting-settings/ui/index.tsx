import { CancelMeeting } from "@/features/cancel-meeting";
import { useNavigate } from "react-router";
import { ExtendMeeting } from "@/features/extend-meeting/ui";
import { CompleteMeeting } from "@/features/complete-meeting";
//import { meetingsApi } from "@/entities/meeting";
import { meetings } from "@/mocks";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { BaseTypography } from "@/shared/ui";

export const MeetingSettings = ({ meeting_id }: { meeting_id: number }) => {
  const navigate = useNavigate();
  const data = meetings.find((item) => item.meeting_id === meeting_id);
  // const { data } = meetingsApi.useGetMeetingbyIdQuery(meetingId);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!data) return;

  const rescheduleMeeting = () => {
    navigate(`/meeting/${meeting_id}/expert/${data.expert_id}`);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <SettingsIcon color="primary" />
      </Button>
      <Menu
        id="basic-menu-meeting"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <ExtendMeeting meeting={data} />
        <MenuItem onClick={rescheduleMeeting}>
          <BaseTypography>Перенести</BaseTypography>
        </MenuItem>
        <CompleteMeeting meeting_id={meeting_id} />
        <CancelMeeting meeting_id={meeting_id} slot_id={data.slot_id} />
      </Menu>
    </div>
  );
};
