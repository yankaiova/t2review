import { Button } from "@mui/material";
import { style } from "./index.style";
type PropsBaseButton = {
  onClick?: () => void;
  text: string;
};
export const BaseButton = ({ onClick, text }: PropsBaseButton) => {
  return (
    <Button sx={style} onClick={onClick}>
      {text}
    </Button>
  );
};
