import { colorStatus } from "@/shared/lib/helpers";
import { Typography } from "@mui/material";

export const TypographyStatus = ({ text }: { text: string }) => {
  const color = colorStatus(text);
  return <Typography color={color}>{text}</Typography>;
};
