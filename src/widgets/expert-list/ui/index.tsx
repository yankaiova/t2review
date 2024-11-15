import { CardExpert, specialistsApi } from "@/entities/specialist";
import { users } from "@/mocks";
import { Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ExpertList = () => {
  const experts = users;
  const navigate = useNavigate();

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
