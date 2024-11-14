import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Comment } from "./types";

type CommentState = {
  comments: Comment[];
};
export const initialState: CommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    cleanComments: (state) => {
      state.comments = [];
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      state.comments = state.comments?.filter(
        (item) => item.comment_id !== action.payload.comment_id
      );
    },
  },
});

export const { cleanComments, addComment, removeComment } =
  commentSlice.actions;
