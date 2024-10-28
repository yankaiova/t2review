import { createSelector } from "@reduxjs/toolkit";
const getRecord = (state) => state.record;
export const getChosenOptions = createSelector(getRecord, (record) => {
  return record.chosenOptions;
});
export const getSlotByRecord = createSelector(getRecord, (record) => {
  return record.slot;
});
