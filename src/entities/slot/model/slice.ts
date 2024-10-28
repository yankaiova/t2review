import { createSlice } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

export interface DayState {
  date: string;
  //   start_time: string;
  //   end_time: string;
}

const initialState: DayState = {
  date: JSON.stringify(dayjs(Date.now())),
  //   start_time: "00:00",
  //   end_time: "00:00",
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    // setStartTime: (state, action) => {
    //   state.start_time = action.payload;
    // },
    // setEndTime: (state, action) => {
    //   state.end_time = action.payload;
    // },
  },
});

export const { setDate } = daySlice.actions;

export default daySlice.reducer;
