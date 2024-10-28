import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  chosenOptions: [""],
  expert_id: 1,
  slot: {},
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setChosenOptions(
      state,
      { payload }: PayloadAction<{ chosenOptions: string[] }>
    ) {
      state.chosenOptions = payload.chosenOptions;
    },
    setExpert: (state, action) => {
      state.expert_id = action.payload;
    },
    setSlot: (state, action) => {
      state.slot = action.payload;
    },
  },
});

export const { setChosenOptions, setSlot, setExpert } = recordSlice.actions;

export default recordSlice.reducer;
