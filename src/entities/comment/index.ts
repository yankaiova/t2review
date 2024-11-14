export { commentsApi } from "./api/slice";
export { CommentItem } from "./ui";
export { type Comment } from "./model/types";
export { getComments } from "./model/selectors";
export {
  cleanComments,
  addComment,
  removeComment,
  commentSlice,
} from "./model/slice";
