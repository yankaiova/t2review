import { useDispatch, useSelector } from "react-redux";
import { setSlot } from "../../slot/model/slice";
import { useCallback } from "react";
import { getSlot } from "../model/selectors";

export const useSlot = () => {
  const dispatch = useDispatch();
  const slotAtribiutes = useSelector(getSlot);

  const setCurrentSlot = useCallback(
    (slot: any) => {
      dispatch(setSlot(slot));
    },
    [dispatch, slotAtribiutes]
  );

  return { slotAtribiutes, setCurrentSlot };
};
