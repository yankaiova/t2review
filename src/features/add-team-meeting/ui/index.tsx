import { Chip, MenuItem } from "@mui/material";
import { teamsApi } from "../api/slice";
import { UserTeamResponse } from "@/features/add-team-meeting";

export const AddUsersTeam = ({ team }: { team: string }) => {
  const { data } = teamsApi.useGetUserbyTeamidQuery(Number(team));
  if (!data || data.length < 1) return;
  console.log(data);
  return (
    <div>
      {data.map((item: UserTeamResponse) => (
        <MenuItem key={item.userprofileid}>
          <Chip label={item.firstname + " " + item.lastname} />
        </MenuItem>
      ))}
    </div>
  );
};
