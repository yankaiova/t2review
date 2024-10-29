import { createSelector } from "@reduxjs/toolkit";
export const getRecord = (state) => state.record;
export const getChosenOptions = createSelector(getRecord, (record) => {
  return record.chosenOptions;
});
