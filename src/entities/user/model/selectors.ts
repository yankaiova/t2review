import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/entities/root-store";
export const getRecord = (state: RootState) => state.users;
export const getChosenOptions = createSelector(getRecord, (record) => {
  return record.chosenOptions;
});
export const getQuerySearch = createSelector(getRecord, (record) => {
  return record.querySearch;
});
