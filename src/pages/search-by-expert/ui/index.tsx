import { ExpertInfo } from "@/widgets/expert-detail";
import { RecordsByExpert } from "@/widgets/record-list";
import { Container, Stack } from "@mui/material";

export const SearchExpertPage = () => {
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "start", sm: "center" }}
      >
        <ExpertInfo />
        <RecordsByExpert />
      </Stack>
    </Container>
  );
};
