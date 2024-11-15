import { createSlice } from "@reduxjs/toolkit";

type MaterialState = {
  links: string[];
};
export const initialState: MaterialState = {
  links: [],
};

export const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    addToMaterials: (state, action) => {
      state.links.push(action.payload);
    },
    removeFromMaterials: (state, action) => {
      state.links = state.links?.filter((item) => item !== action.payload);
    },
    cleanMaterials: (state) => {
      state.links = [];
    },
  },
});

export const { removeFromMaterials, addToMaterials, cleanMaterials } =
  materialSlice.actions;
