import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { BaseBoxContainer, BaseTypography } from "@/shared/ui";
import iconUser from "@/assets/User.png";

interface Expert {
  id_expert: number;
  expert_name: string;
  role: string;
  competetion: string;
  mark: number;
}
type PropsCardExpert = { expert: Expert };

export const CardExpert = ({ expert }: PropsCardExpert) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {expert.expert_name}
        </Typography>
        <CardMedia src={iconUser} />
        <BaseBoxContainer>
          <BaseTypography>Роль</BaseTypography>
          <BaseTypography>{expert.role}</BaseTypography>
        </BaseBoxContainer>

        <BaseBoxContainer>
          <BaseTypography>Уровень компетенции</BaseTypography>
          <BaseTypography>{expert.competetion}</BaseTypography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Оценка</BaseTypography>
          <Rating name="read-only" value={expert.mark} readOnly />
        </BaseBoxContainer>
      </CardContent>
    </Card>
  );
};
