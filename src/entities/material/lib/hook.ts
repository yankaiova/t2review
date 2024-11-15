import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  addToMaterials,
  cleanMaterials,
  removeFromMaterials,
} from "../model/slice";
import { getMaterialLinks } from "../model/selectors";
export const useMaterials = () => {
  const dispatch = useAppDispatch();
  const links = useAppSelector(getMaterialLinks);

  const addLink = (link: string) => {
    dispatch(addToMaterials(link));
  };

  const removeLink = (link: string) => {
    dispatch(removeFromMaterials(link));
  };
  const clearLinks = () => {
    dispatch(cleanMaterials());
  };

  return { links, addLink, removeLink, clearLinks };
};
