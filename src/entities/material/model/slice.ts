import { createSlice } from "@reduxjs/toolkit";

export interface MaterialState {
  links: string[];
}

const initialState: MaterialState = {
  links: [],
};

export const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    addToMaterials: (state, action) => {
      state.links.push(action.payload);
    },
    removeFromMaterials: (state, action) => {
      state.links = state.links?.filter((item) => item !== action.payload);
    },
  },
});

export const { addToMaterials, removeFromMaterials } = materialsSlice.actions;

export default materialsSlice.reducer;
