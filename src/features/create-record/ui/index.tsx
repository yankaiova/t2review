import { useNavigate, useLocation, useParams } from "react-router-dom";
import { meetingsApi } from "@/entities/meeting";
import { useSlot, type Slot, slotsApi } from "@/entities/slot";
import { BaseButton } from "@/shared/ui";

export const CreateRecordButton = ({ slot }: { slot: Slot }) => {
  const isFirstCreateMeeting = !!useLocation().pathname.match(/reschudale/);
  const { meetingId } = useParams();
  const meeting_id = Number(meetingId);
  const { setCurrentSlot } = useSlot();

  const navigate = useNavigate();
  const [updateMeeting] = meetingsApi.useSetNewSlotMeetingMutation();
  const [setAvailibleSlot] = slotsApi.useUpdateSlotAvalibleMutation();

  const handleClick = () => {
    setCurrentSlot(slot);
    if (isFirstCreateMeeting) {
      console.log(slot.date, "date");
      console.log("reschudale", meetingId);
      updateMeeting({
        meeting_id,
        meeting_type: slot.slot_type,
        date: slot.date,
        start_time: slot.start_time,
        end_time: slot.end_time,
      }).then((res) =>
        setAvailibleSlot({
          slot_id: res.data.data.slot_id,
          is_availible: "false",
        })
      );
      navigate("/calendar");
    } else {
      setCurrentSlot(slot);
      navigate("/meetings/create");
    }
  };
  return <BaseButton text="Записаться" onClick={handleClick} />;
};
