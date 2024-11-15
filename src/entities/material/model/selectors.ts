import { createSelector } from "@reduxjs/toolkit";

export const getMaterial = (state: RootState) => state.material;
export const getMaterialLinks = createSelector(getMaterial, (meeting) => {
  return meeting.links;
});
