import { Checkbox, ListItemText, MenuItem } from "@mui/material";
import { useAppDispatch } from "@/shared/lib/hooks";
import { useSelector } from "react-redux";
import { teamsApi } from "../api/slice";
import { addUserTeam, removeUserTeam, getUsersTeam } from "@/entities/meeting";
import { UserTeamResponse } from "@/features/add-users-meeting";
import { checkIncludeUser, transformData } from "../lib/utils";

export const AddUsersTeam = ({ team }: { team: string }) => {
  console.log("add", team);

  const { data } = teamsApi.useGetUserbyTeamidQuery(Number(team));
  if (!data || data.length < 1) return;

  const dispatch = useAppDispatch();
  const currentUsers = useSelector(getUsersTeam);

  const handleChangeUser = (item: UserTeamResponse) => {
    const user = transformData(item);
    if (checkIncludeUser(currentUsers, user)) {
      dispatch(removeUserTeam(user.userprofileid));
    } else {
      dispatch(addUserTeam(user));
    }
  };

  return (
    <div>
      {data.map((item: UserTeamResponse) => (
        <MenuItem
          key={item.userprofileid}
          onClick={() => handleChangeUser(item)}
        >
          <Checkbox
            checked={checkIncludeUser(currentUsers, transformData(item))}
          />
          <ListItemText primary={item.firstname + " " + item.lastname} />
        </MenuItem>
      ))}
    </div>
  );
};
