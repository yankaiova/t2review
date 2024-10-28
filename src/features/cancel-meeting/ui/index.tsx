import { BaseButton } from "../../../shared/ui";
import { meetingsApi } from "../../../entities/meeting";
export const CancelMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const [updateStatus, { isLoading }] =
    meetingsApi.useSetMeetingStatusMutation();
  const cancelMeeting = () => {
    updateStatus({ meeting_id: meeting_id, status: "canceled" });
  };

  return <BaseButton text="Отменить встречу" onClick={cancelMeeting} />;
};
