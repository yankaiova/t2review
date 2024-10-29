import { createSlice } from "@reduxjs/toolkit";
import { dateToFormat } from "../lib/dateToFormat";

export interface DayState {
  date: string;
}
const today = dateToFormat(Date.now());

const initialState: DayState = {
  date: today,
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = daySlice.actions;

export default daySlice.reducer;
