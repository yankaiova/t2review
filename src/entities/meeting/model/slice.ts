import { dateToFormat } from "@/shared/lib/helpers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface BaseUser {
  userprofileid: number;
  firstname: string;
  lastname: string;
}
type MeetingState = {
  date: string;
  users: BaseUser[];
};
const today = dateToFormat(Date.now());
export const initialState: MeetingState = {
  date: today,
  users: [],
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    addUsersTeam: (state, action: PayloadAction<BaseUser>) => {
      state.users.push(action.payload);
    },
    removeUserTeam: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        (item) => item.userprofileid !== action.payload
      );
    },
  },
});

export const { setDate, addUsersTeam, removeUserTeam } = meetingSlice.actions;

export default meetingSlice.reducer;
