import { createSelector } from "@reduxjs/toolkit";

export const getMaterials = (state) => state.materials;

export const getMaterialLinks = createSelector(getMaterials, (materials) => {
  return materials.links;
});
