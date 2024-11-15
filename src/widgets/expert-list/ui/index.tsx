// import {
//   CardExpert,
//   specialistsApi,
//   useSearchExpert,
// } from "@/entities/specialist";
import { CardExpert, specialistsApi } from "@/entities/specialist";
import { getChosenOptions } from "@/entities/specialist/model/selectors";
import { users } from "@/mocks";
import { useAppSelector } from "@/shared/lib/hooks";
import { Grid2 } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const ExpertList = () => {
  const options = useAppSelector(getChosenOptions);
  const { position } = options;
  if (position) {
    const { data } = specialistsApi.useGetExpertsByFilterQuery();
    console.log(data);
  }
  const { data: experts } =
    specialistsApi.useGetExpertsByFilterQuery("Backend Developer");
  // const { query, chosenOptions } = useSearchExpert();
  // const [experts, setExperts] = useState<User[]>([...users]);
  // const [expertByQuery] = specialistsApi.useGetExpertsByQueryMutation();
  // const [expertsByFilters] = specialistsApi.useGetExpertsByFilterMutation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (query) {
  //     expertByQuery(query).then((res) => {
  //       if (res.data) {
  //         setExperts(res.data);
  //       }
  //     });
  //   }
  // }, [query]);
  // useEffect(() => {
  //   if (chosenOptions) {
  //     expertsByFilters(chosenOptions).then((res) => {
  //       if (res.data) {
  //         setExperts(res.data);
  //       }
  //     });
  //   }
  // }, [chosenOptions]);
  if (!experts) return;

  const handleClick = (id: number) => {
    navigate(`/search/expert/${id}`);
  };
  return (
    <Grid2 container spacing={2} columns={{ xs: 1, sm: 2 }}>
      {experts.map((item: User) => (
        <Grid2 key={item.user_id + "ex"} size={1}>
          <CardExpert
            expert={item}
            key={item.user_id}
            handleClick={() => handleClick(item.user_id)}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};
