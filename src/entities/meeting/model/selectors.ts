import { createSelector } from "@reduxjs/toolkit";

export const getDay = (state: RootState) => state.day;

export const getDate = createSelector(getDay, (day) => {
  return day.date;
});
