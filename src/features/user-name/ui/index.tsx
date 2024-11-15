import { specialistsApi } from "@/entities/specialist";
import { teamsApi } from "@/features/add-team-meeting";
import { BaseTypography } from "@/shared/ui";

export const NameUser = ({ user_id }: { user_id: number }) => {
  const { data } = teamsApi.useGetUserByIdQuery(user_id);
  return (
    <BaseTypography>{data?.firstname + " " + data?.lastname}</BaseTypography>
  );
};
export const NameExpert = ({ id }: { id: number }) => {
  const { data } = specialistsApi.useGetExpertbyIdQuery(id);
  return <BaseTypography>{data?.name + " " + data?.surname}</BaseTypography>;
};
