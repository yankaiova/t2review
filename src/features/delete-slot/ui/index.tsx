import { BaseButton } from "@/shared/ui";

export const DeleteSlot = ({ slot_id }: { slot_id: number }) => {
  const deleteSlot = () => {};

  return <BaseButton text="Удалить" onClick={deleteSlot} />;
};
