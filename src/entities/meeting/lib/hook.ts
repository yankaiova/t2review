import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../model/selectors";
import { setDate } from "../model/slice";

export const useCalendar = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);

  const setNewDate = (newDate: string) => {
    dispatch(setDate(newDate));
  };

  return { date, setNewDate };
};
