import { dateToFormat } from "@/shared/lib/helpers";
import { createSlice } from "@reduxjs/toolkit";

export interface DayState {
  date: string;
}
const today = dateToFormat(Date.now());

const initialState: DayState = {
  date: today,
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = meetingSlice.actions;

export default meetingSlice.reducer;
