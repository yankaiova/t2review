import { dateToFormat } from "@/shared/lib/helpers";
import { createSlice } from "@reduxjs/toolkit";

type MeetingState = {
  date: string;
};
const today = dateToFormat(Date.now());
export const initialState: MeetingState = {
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
