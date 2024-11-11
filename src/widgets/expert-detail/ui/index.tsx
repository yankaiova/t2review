import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { CardExpert, usersApi } from "@/entities/specialist";
import { users } from "@/mocks";
import { useState } from "react";

export const ExpertInfo = () => {
  const { expertId } = useParams();
  const [data, setData] = useState(
    users.find((item) => item.user_id === Number(expertId))
  );
  // const { data } = usersApi.useGetUserbyIdQuery(Number(expert_id));

  if (!data) return;

  return (
    <CardExpert expert={data}>
      <>
        <BaseTypography>Описание</BaseTypography>
        <BaseTypography>{data.description}</BaseTypography>
      </>
    </CardExpert>
  );
};
