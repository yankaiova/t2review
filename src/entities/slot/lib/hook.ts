import { useAppDispatch, useAppSelector } from "@/entities/root-store";
import { setSlot } from "../model/slice";
import { getSlot } from "../model/selectors";
import { BaseSlot } from "@/shared/model/types";

type TSlot = BaseSlot & { slot_id: number };
export const useSlot = () => {
  const dispatch = useAppDispatch();
  const slotAtribiutes = useAppSelector(getSlot);

  const setCurrentSlot = (slot: TSlot) => {
    dispatch(setSlot(slot));
  };

  return { slotAtribiutes, setCurrentSlot };
};
