import { createSelector } from "@reduxjs/toolkit";

export const getComment = (state: RootState) => state.comment;

export const getComments = createSelector(getComment, (meeting) => {
  return meeting.comments;
});
