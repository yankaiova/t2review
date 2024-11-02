import { useNavigate, useLocation, useParams } from "react-router-dom";
import { meetingsApi } from "@/entities/meeting";
import { useSlot } from "@/entities/slot";
import { BaseButton } from "@/shared/ui";
import { Slot } from "@/shared/model/types";

export const CreateRecordButton = ({ slot }: { slot: Slot }) => {
  const { meeting_id } = useParams();
  const meetingId = Number(meeting_id);
  const { slotAtribiutes, setCurrentSlot } = useSlot();

  const navigate = useNavigate();

  const [updateMeeting] = meetingsApi.useUpdateMeetingMutation();

  const handleClick = () => {
    setCurrentSlot(slot);
    if (!!useLocation().pathname.match(/reschudale/)) {
      updateMeeting({ meetingId, ...slotAtribiutes });
    } else {
      navigate("/meeting/create");
    }
  };
  return <BaseButton text="Записаться" onClick={handleClick} />;
};