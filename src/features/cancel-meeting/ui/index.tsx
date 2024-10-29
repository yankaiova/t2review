import { BaseButton } from "../../../shared/ui";
import { meetingsApi } from "../../../entities/meeting";
import { slotsApi } from "../../../entities/slot";
import { useSlot } from "../../../entities/slot";

export const CancelMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const { slotAtribiutes } = useSlot();

  const [updateStatus] = meetingsApi.useSetMeetingStatusMutation();
  const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();

  const cancelMeeting = () => {
    updateStatus({ meeting_id: meeting_id, status: "canceled" }).then(() =>
      updateSlotAvalible({ slot_id: slotAtribiutes.slot_id, is_avalible: true })
    );
  };

  return <BaseButton text="Отменить встречу" onClick={cancelMeeting} />;
};
