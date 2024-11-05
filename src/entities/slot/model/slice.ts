import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BaseSlot } from "@/shared/model/types";

export type SlotState = BaseSlot & { slot_id: number };
export const initialState: SlotState = {
  slot_id: 1,
  slot_type: "online",
  date: "",
  start_time: "",
  end_time: "",
};

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    setSlot: (state, { payload }: PayloadAction<SlotState>) => {
      state.slot_id = payload.slot_id;
      state.date = payload.date;
      state.start_time = payload.start_time;
      state.end_time = payload.end_time;
      state.slot_type = payload.slot_type;
    },
  },
});

export const { setSlot } = slotSlice.actions;

export default slotSlice.reducer;
