import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getDate, getMaterialLinks } from "../model/selectors";
import { addToMaterials, removeFromMaterials, setDate } from "../model/slice";

export const useCalendar = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector(getDate);

  const setNewDate = (newDate: string) => {
    dispatch(setDate(newDate));
  };

  return { date, setNewDate };
};

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
