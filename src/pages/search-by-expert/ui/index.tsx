import { ExpertInfo } from "@/widgets/expert-detail";
import { RecordsByExpert } from "@/widgets/record-list";
import { Container, Stack } from "@mui/material";

export const SearchExpertPage = () => {
  return (
    <Container>
      <Stack flexDirection="row">
        <ExpertInfo />
        <RecordsByExpert />
      </Stack>
    </Container>
  );
};
