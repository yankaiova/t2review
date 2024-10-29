import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type RecordState = {
  chosenOptions: string[];
  expert_id: number;
};
export const initialState: RecordState = {
  chosenOptions: [""],
  expert_id: 1,
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
  },
});

export const { setChosenOptions, setExpert } = recordSlice.actions;

export default recordSlice.reducer;
