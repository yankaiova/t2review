// import {
//   CardExpert,
//   specialistsApi,
//   useSearchExpert,
// } from "@/entities/specialist";
import { CardExpert } from "@/entities/specialist";
import { users } from "@/mocks";
import { User } from "@/shared/model/types";
import { Grid2 } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const ExpertList = () => {
  const experts = users;
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
