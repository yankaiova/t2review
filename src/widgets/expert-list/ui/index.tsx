import { CardExpert, usersApi, useSearchExpert } from "@/entities/user";
import { User } from "@/shared/model/types";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

export const ExpertList = () => {
  const { query, chosenOptions } = useSearchExpert();
  const [experts, setExperts] = useState<User[]>([]);

  const [expertByQuery] = usersApi.useGetExpertsByQueryMutation();
  const [expertsByFilters] = usersApi.useGetExpertsByFilterMutation();

  useEffect(() => {
    if (query) {
      expertByQuery(query).then((res) => {
        if (res.data) {
          setExperts(res.data);
        }
      });
    }
  }, [query]);
  useEffect(() => {
    if (chosenOptions) {
      expertsByFilters(chosenOptions).then((res) => {
        if (res.data) {
          setExperts(res.data);
        }
      });
    }
  }, [chosenOptions]);
  if (!experts) return;
  return (
    <Grid2 container columns={{ xs: 1, sm: 2 }}>
      {experts.map((item: User) => (
        <Grid2 key={item.user_id + "ex"} size={1}>
          <CardExpert expert={item} />
        </Grid2>
      ))}
    </Grid2>
  );
};
