import { Container } from "@mui/material";
import { SearchForm } from "@/features/search";
import { Filters } from "@/features/filters";
import { ExpertList } from "@/widgets/expert-list";
import { Stack } from "@mui/system";
export const SearchPage = () => {
  return (
    <Container>
      <ExpertList />
    </Container>
  );
};
