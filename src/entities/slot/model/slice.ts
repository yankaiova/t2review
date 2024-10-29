import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type RecordState = {
  slot_id: number;
  meeting_type: string;
  date: string;
  start_time: string;
  end_time: string;
};
export const initialState: RecordState = {
  slot_id: 1,
  meeting_type: "online",
  date: "",
  start_time: "",
  end_time: "",
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setSlot: (
      state,
      {
        payload,
      }: PayloadAction<{
        slot_id: number;
        meeting_type: string;
        date: string;
        start_time: string;
        end_time: string;
      }>
    ) => {
      state.slot_id = payload.slot_id;
      state.date = payload.date;
      state.start_time = payload.start_time;
      state.end_time = payload.end_time;
      state.meeting_type = payload.meeting_type;
    },
  },
});

export const { setSlot } = recordSlice.actions;

export default recordSlice.reducer;
