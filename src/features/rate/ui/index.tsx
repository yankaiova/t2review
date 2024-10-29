import { Box, Rating, Typography } from "@mui/material";
import { BaseModal } from "../../../shared/ui";
import { useState } from "react";

type PropsRate = {
  id: number;
  actions: React.ReactElement;
};
export const Rate = ({ id, actions }: PropsRate) => {
  const [value, setValue] = useState<number | null>(5);
  const setRating = (e: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <BaseModal eventName="Завершить встречу">
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Oцените встречу</Typography>
        <Rating name="simple-controlled" value={value} onChange={setRating} />
        {actions}
      </Box>
    </BaseModal>
  );
};
