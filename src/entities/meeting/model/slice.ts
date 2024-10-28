import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  slot: {},
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setSlot: (state, action) => {
      state.slot = action.payload;
    },
  },
});

export const { setSlot } = meetingSlice.actions;

export default meetingSlice.reducer;
