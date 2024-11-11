import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getMaterialLinks } from "../model/selectors";
import { addToMaterials, removeFromMaterials } from "../model/slice";

export const useMaterials = () => {
  const dispatch = useAppDispatch();
  const links = useAppSelector(getMaterialLinks);

  const addLink = (link: string) => {
    dispatch(addToMaterials(link));
  };

  const removeLink = (link: string) => {
    dispatch(removeFromMaterials(link));
  };

  return { links, addLink, removeLink };
};
