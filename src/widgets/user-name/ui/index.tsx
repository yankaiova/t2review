import { expertsApi } from "@/entities/expert";
import { BaseTypography } from "@/shared/ui";

export const NameUser = ({ user_id }: { user_id: number }) => {
  const { data } = expertsApi.useGetUserbyIdQuery(user_id);
  return <BaseTypography>{data?.name}</BaseTypography>;
};
