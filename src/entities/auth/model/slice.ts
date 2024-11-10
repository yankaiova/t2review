import { getUser } from "@/shared/lib/helpers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user: number | null;
}
const savedUser = getUser();
const initialState: AuthState = {
  user: savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
