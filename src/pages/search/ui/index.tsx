import { Container } from "@mui/material";
import { SearchForm } from "@/features/search";
import { Filters } from "@/features/filters";
import { ExpertList } from "@/widgets/expert-list";
import { Stack } from "@mui/system";
import { AddMeeting } from "@/widgets/add-meeting";
export const SearchPage = () => {
  return (
    <Container>
      <SearchForm />
      <Stack direction="row" justifyContent="start" alignItems="center">
        <Filters />
        <ExpertList />
      </Stack>
    </Container>
  );
};
