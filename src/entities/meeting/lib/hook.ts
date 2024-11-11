import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getDate } from "../model/selectors";
import { setDate } from "../model/slice";

export const useCalendar = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector(getDate);

  const setNewDate = (newDate: string) => {
    dispatch(setDate(newDate));
  };

  return { date, setNewDate };
};
