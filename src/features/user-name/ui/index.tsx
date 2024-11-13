//import { usersApi } from "@/entities/user";
import { users } from "@/mocks";
import { BaseTypography } from "@/shared/ui";

export const NameUser = ({ user_id }: { user_id: number }) => {
  // const { data } = usersApi.useGetUserbyIdQuery(user_id);
  const data = users.find((item) => item.user_id === user_id);
  return (
    <BaseTypography>{data?.firstName + " " + data?.lastName}</BaseTypography>
  );
};
