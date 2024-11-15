import { filtersApi } from "..";

export const useFilters = () => {
  const { data: positions } = filtersApi.useGetAllPositionsQuery();
  //const { data: skills } = filtersApi.useGetAllSkillsQuery();
  console.log(positions);
  //console.log(skills);
  return { positions };
};
