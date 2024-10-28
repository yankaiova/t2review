import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  BaseButton,
  BaseBoxContainer,
  BaseTypography,
} from "../../../shared/ui";

export const Record = ({ slot, handleClick }: any) => {
  return (
    <Card>
      <CardContent>
        <BaseBoxContainer>
          <Typography variant="h5" component="div" color="text.main">
            День
          </Typography>
          <Typography variant="h5" component="div" color="text.main">
            {slot.date}
          </Typography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Начало</BaseTypography>
          <BaseTypography>{slot.start_time}</BaseTypography>
        </BaseBoxContainer>
        <BaseBoxContainer>
          <BaseTypography>Конец</BaseTypography>
          <BaseTypography>{slot.end_time}</BaseTypography>
        </BaseBoxContainer>
      </CardContent>
      <CardActions>
        <BaseButton text="Записаться" onClick={handleClick} />
      </CardActions>
    </Card>
  );
};
