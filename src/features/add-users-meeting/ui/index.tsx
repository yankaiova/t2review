import { Checkbox, ListItemText, MenuItem } from "@mui/material";
import { useAppDispatch } from "@/shared/lib/hooks";
import { teamsApi } from "../api/slice";
import { addUsersTeam, getUsersTeam, removeUserTeam } from "@/entities/meeting";
import { useSelector } from "react-redux";
import { UserTeamResponse } from "@/features/add-users-meeting/api/slice";

interface BaseUser {
  userprofileid: number;
  firstname: string;
  lastname: string;
}

export const AddUsersTeam = ({ team }: { team: string }) => {
  const { data } = teamsApi.useGetUserbyTeamidQuery(Number(team));
  const dispatch = useAppDispatch();
  const currentUsers = useSelector(getUsersTeam);
  console.log(data);

  const handleChangeUser = (item: UserTeamResponse) => {
    const user: BaseUser = {
      userprofileid: item.userprofileid,
      firstname: item.firstname,
      lastname: item.lastname,
    };
    if (currentUsers.includes(user)) {
      dispatch(removeUserTeam(user.userprofileid));
    } else {
      dispatch(addUsersTeam(user));
    }
  };

  if (!data || data.length < 1) return;

  return (
    <div>
      {data.map((item: UserTeamResponse) => (
        <MenuItem
          key={item.userprofileid}
          onClick={() => handleChangeUser(item)}
        >
          <Checkbox checked={currentUsers.includes(item)} />
          <ListItemText primary={item.firstname + " " + item.lastname} />
        </MenuItem>
      ))}
    </div>
  );
};
