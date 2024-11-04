import { FilterOptions } from "@/shared/model/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type ExpertState = {
  chosenOptions: Partial<FilterOptions>;
  querySearch: string;
  expert_id: number;
};
export const initialState: ExpertState = {
  chosenOptions: {},
  querySearch: "",
  expert_id: 1,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setChosenOptions(
      state,
      { payload }: PayloadAction<{ chosenOptions: Partial<FilterOptions> }>
    ) {
      state.chosenOptions = payload.chosenOptions;
    },
    setExpert: (state, action) => {
      state.expert_id = action.payload;
    },
    setQuerySearch: (state, action) => {
      state.querySearch = action.payload;
    },
  },
});

export const { setChosenOptions, setExpert, setQuerySearch } =
  usersSlice.actions;

export default usersSlice.reducer;
