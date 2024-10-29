import { useNavigate, useLocation } from "react-router-dom";
import { meetingsApi } from "../../../entities/meeting";
import { Slot } from "../../../shared/model/types";
import { Record } from "../../../entities/record";
import { useSlot } from "../../../entities/slot";

const slots: Slot[] = [];
export const RecordsByExpert = () => {
  const { slotAtribiutes, setCurrentSlot } = useSlot();

  const navigate = useNavigate();

  const [updateMeeting] = meetingsApi.useUpdateMeetingMutation();

  function handleClick(slot: Slot) {
    setCurrentSlot(slot);
    if (!!useLocation().pathname.match(/reschudale/)) {
      updateMeeting({ meeting_id, ...slotAtribiutes });
    } else {
      navigate("/meeting/create");
    }
  }

  if (slots.length === 0) {
    return <div style={{ marginBottom: "20px" }}>Нет слотов текущую дату</div>;
  }
  return (
    <>
      {/* <ExpertDetail /> */}
      {slots.map((item: Slot) => (
        <Record slot={item} handleClick={() => handleClick(item)} />
      ))}
    </>
  );
};
