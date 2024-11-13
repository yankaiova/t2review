import { specialistsApi } from "@/entities/specialist";
import { BaseTypography } from "@/shared/ui";

export const Teams = () => {
  const { data } = specialistsApi.useGetAllTeamQuery();
  if (data.length === 0) {
    return <BaseTypography>Нет свободных записей</BaseTypography>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.teamid}>{item.team_name}</div>
      ))}
    </div>
  );
};
