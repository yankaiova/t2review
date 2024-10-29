import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getDate } from "../model/selectors";
import { setDate } from "../model/slice";

export const useCalendar = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);

  const setNewDate = useCallback(
    (newDate: string) => {
      dispatch(setDate(newDate));
    },
    [dispatch, date]
  );

  return { date, setNewDate };
};
