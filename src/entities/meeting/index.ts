export { MeetingItem } from "./ui";
export { meetingsApi } from "./api/slice";
export { useCalendar, useMaterials } from "./lib/hook";
export {
  addUserTeam,
  removeUserTeam,
  cleanUsersTeam,
  meetingSlice,
} from "./model/slice";
export { getUsersTeam } from "./model/selectors";
export { type BaseUser, type Meeting } from "./model/types";
