import { meetingsApi } from "@/entities/meeting";
import { UserMeeting } from "@/entities/meeting/model/types";
import { teamsApi } from "@/features/add-team-meeting";
export const useUsers = (meeting_id: number) => {
  const { data } = meetingsApi.useGetUsersbyMeetingQuery(meeting_id);
  console.log(data, "meetingusers");
  if (!data) return 0;
  const users: string[] = [];
  data.forEach((item: UserMeeting) => {
    const { data: user } = teamsApi.useGetUserByIdQuery(item.user_id);
    console.log(user, "team");
    users.push(user.firstname + " " + user?.lastname);
  });

  return users;
};
