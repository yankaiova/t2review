import { Box } from "@mui/material";
import { style } from "./index.style";
export const BaseBoxContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <Box sx={style}>
      <>{children}</>
    </Box>
  );
};
