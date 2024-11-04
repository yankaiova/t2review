import { colorStatus } from "@/shared/lib/helpers";
import { Typography } from "@mui/material";

export const TypographyStatus = ({ text }: { text: string }) => {
  const color = colorStatus(text);
  const style = { fontSize: "1.25rem", color: color };
  return <Typography sx={style}>{text}</Typography>;
};
