import { BaseUser } from "@/entities/meeting";
import { UserTeamResponse } from "@/features/add-users-meeting";

export const checkIncludeUser = (users: BaseUser[], user: BaseUser) => {
  let isInclude = false;
  users.map((item: BaseUser) => {
    if (item.userprofileid === user.userprofileid) {
      isInclude = true;
    }
  });
  return isInclude;
};
export const transformData = (user: UserTeamResponse): BaseUser => {
  return {
    userprofileid: user.userprofileid,
    firstname: user.firstname,
    lastname: user.lastname,
  };
};
