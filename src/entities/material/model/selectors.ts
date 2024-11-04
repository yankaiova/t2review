import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/entities/root-store";

export const getMaterials = (state: RootState) => state.materials;

export const getMaterialLinks = createSelector(getMaterials, (materials) => {
  return materials.links;
});
