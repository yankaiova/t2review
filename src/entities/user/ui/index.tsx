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

type PropsCardExpert = { expert: User; children?: React.ReactNode };

export const CardExpert = ({ expert, children }: PropsCardExpert) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {expert.firstName + " " + expert.lastName}
        </Typography>
        <CardMedia src={iconUser} />
        <BaseBoxContainer>
          <BaseTypography>Роль</BaseTypography>
          <BaseTypography>{expert.role}</BaseTypography>
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
