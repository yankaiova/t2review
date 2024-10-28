import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSlot } from "../model/slice";
import { useCallback } from "react";
import { getSlotByRecord } from "../model/selectors";

export const useSlotByRecord = () => {
  const dispatch = useDispatch();
  const slot = useSelector(getSlotByRecord);

  const setSlotForRecord = useCallback(
    (slotValue: any) => {
      dispatch(setSlot(slotValue));
    },
    [dispatch, slot]
  );

  return { slot, setSlotForRecord };
};
export const useRecord = () => {
  const navigate = useNavigate();
  function handleClick() {
    if (!!useLocation().pathname.match(/reschudale/)) {
      console.log("reshudale");
    } else {
      navigate("/meeting/create");
    }
  }
  return { handleClick };
};
