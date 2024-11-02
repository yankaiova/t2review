import { BaseButton } from "@/shared/ui";
import { meetingsApi } from "@/entities/meeting";
export const CompleteMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const [updateStatus, { isLoading }] =
    meetingsApi.useSetMeetingStatusMutation();
  const cancelMeeting = () => {
    updateStatus({ meeting_id: meeting_id, status: "completed" });
  };

  return <BaseButton text="Завершить" onClick={cancelMeeting} />;
};
