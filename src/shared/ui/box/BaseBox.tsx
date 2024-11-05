import { Box } from "@mui/material";
import { style } from "./styles";
type PropsBaseModal = {
  children?: React.ReactNode;
};

export function BaseBox({ children }: PropsBaseModal) {
  return <Box sx={style}>{children}</Box>;
}
