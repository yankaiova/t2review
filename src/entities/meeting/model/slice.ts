import { dateToFormat } from "@/shared/lib/helpers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BaseUser } from "./types";

type MeetingState = {
  date: string;
  links: string[];
  users: BaseUser[];
};
const today = dateToFormat(Date.now());
export const initialState: MeetingState = {
  date: today,
  links: [],
  users: [],
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    addUserTeam: (state, action: PayloadAction<BaseUser>) => {
      state.users.push(action.payload);
    },
    removeUserTeam: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        (item) => item.userprofileid !== action.payload
      );
    },
    cleanUsersTeam: (state) => {
      state.users = [];
    },
    addToMaterials: (state, action) => {
      state.links.push(action.payload);
    },
    removeFromMaterials: (state, action) => {
      state.links = state.links?.filter((item) => item !== action.payload);
    },
  },
});

export const {
  setDate,
  addUserTeam,
  removeUserTeam,
  cleanUsersTeam,
  removeFromMaterials,
  addToMaterials,
} = meetingSlice.actions;
