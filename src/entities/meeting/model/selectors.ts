import { createSelector } from "@reduxjs/toolkit";

export const getMeeting = (state: RootState) => state.meeting;

export const getDate = createSelector(getMeeting, (meeting) => {
  return meeting.date;
});
export const getUsersTeam = createSelector(getMeeting, (meeting) => {
  return meeting.users;
});
