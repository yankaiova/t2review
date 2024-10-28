import { Typography } from "@mui/material";
import { style } from "./index.style";
type PropsBaseTypography = {
  children: React.ReactNode;
};
export const BaseTypography = ({ children }: PropsBaseTypography) => {
  return (
    <Typography sx={style} color="text.main">
      {children}
    </Typography>
  );
};
