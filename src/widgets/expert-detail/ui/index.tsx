import { BaseTypography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { CardExpert } from "@/entities/expert";
import { expertsApi } from "@/entities/expert";
export const ExpertInfo = () => {
  const { expert_id } = useParams();
  const { data } = expertsApi.useGetExpertbyIdQuery(Number(expert_id));

  return (
    <CardExpert expert={data}>
      <>
        <BaseTypography>Описание</BaseTypography>
        <BaseTypography>{data.description}</BaseTypography>
      </>
    </CardExpert>
  );
};
