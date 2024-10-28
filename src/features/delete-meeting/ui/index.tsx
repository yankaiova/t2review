import { BaseButton } from "../../../shared/ui";

export const DeleteMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const deleteMeeting = () => {};

  return <BaseButton text="Удалить встречу" onClick={deleteMeeting} />;
};
