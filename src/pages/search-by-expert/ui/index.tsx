import { ExpertInfo } from "@/widgets/expert-detail";
import { RecordsByExpert } from "@/widgets/record-list";
import { Stack } from "@mui/material";

export const SearchExpertPage = () => {
  return (
    <Stack
      margin={{ xs: "1rem", sm: "4rem" }}
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems="start"
      gap="1rem"
    >
      <ExpertInfo />
      <RecordsByExpert />
    </Stack>
  );
};
