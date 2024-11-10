import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/entities/root";

export const getDay = (state: RootState) => state.day;

export const getDate = createSelector(getDay, (day) => {
  return day.date;
});
