import { CancelMeeting } from "../../../features/cancel-meeting";
import { useParams, useNavigate } from "react-router";
import { Rate } from "../../../features/rate";
import { BaseButton } from "../../../shared/ui";
import { ExtendMeeting } from "../../../features/extend-meeting/ui";
import { CompleteMeeting } from "../../../features/complete-meeting";

export const MeetingEdit = () => {
  const { id } = useParams();
  const meetingId = Number(id);
  const navigate = useNavigate();

  const rescheduleMeeting = () => {
    navigate(`/reschedule/expert/${expert_id}`);
  };

  return (
    <div key={"edit-meet" + id}>
      <ExtendMeeting meeting_id={meetingId} />
      {/* перенести */}
      <BaseButton text="Продлить" onClick={rescheduleMeeting} />
      {/* продлить */}
      <Rate
        id={meetingId}
        actions={<CompleteMeeting meeting_id={meetingId} />}
      />
      {/* завершить и оценить */}
      <CancelMeeting meeting_id={meetingId} />
      {/* отменить */}
    </div>
  );
};
