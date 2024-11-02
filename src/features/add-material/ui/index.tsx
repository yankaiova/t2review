import { useMaterials } from "@/entities/material";
import { BaseButton } from "@/shared/ui";

export const AddMaterial = () => {
  const { addLink } = useMaterials();
  const handleClickAdd = () => {
    addLink(link);
  };
  return <BaseButton text="Добавить" onClick={handleClickAdd} />;
};
