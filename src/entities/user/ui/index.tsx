import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { BaseBoxContainer, BaseTypography } from "@/shared/ui";
import iconUser from "@/assets/User.png";
import { User } from "@/shared/model/types";

type PropsCardExpert = {
  expert: User;
  children?: React.ReactNode;
  handleClick?: () => void;
};

export const CardExpert = ({
  expert,
  handleClick,
  children,
}: PropsCardExpert) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "0px 2px 18px 0px #00000014",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {expert.firstName + " " + expert.lastName}
        </Typography>
        <CardMedia src={iconUser} />
        <BaseBoxContainer>
          <BaseTypography>Роль</BaseTypography>
          <BaseTypography>{expert.roleExpert}</BaseTypography>
        </BaseBoxContainer>

        <BaseBoxContainer>
          <BaseTypography>Уровень компетенции</BaseTypography>
          <BaseTypography>{expert.competence}</BaseTypography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Оценка пользователей</BaseTypography>
          <Rating name="read-only" value={expert.rating} readOnly />
        </BaseBoxContainer>
        {children}
      </CardContent>
    </Card>
  );
};
