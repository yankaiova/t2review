import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { CardExpert, usersApi } from "@/entities/user";

export const ExpertInfo = () => {
  const { expert_id } = useParams();
  const { data } = usersApi.useGetUserbyIdQuery(Number(expert_id));

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
