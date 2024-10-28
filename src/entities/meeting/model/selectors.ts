import { createSelector } from "@reduxjs/toolkit";
const getMeeting = (state) => state.meeting;
export const getChosenOptions = createSelector(getMeeting, (meeting) => {
  return meeting.slot;
});
