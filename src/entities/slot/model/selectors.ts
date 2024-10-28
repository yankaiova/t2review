import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/model/store";

export const getDay = (state: RootState) => state.day;

export const getDate = createSelector(getDay, (day) => {
  return day.date;
});
