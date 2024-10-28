import { Link } from "@mui/material";
import { style } from "./index.style";
type PropsBaseLink = {
  path: string;
  text: string;
};
export const BaseLink = ({ path, text }: PropsBaseLink) => {
  return (
    <Link href={path} variant="body2" sx={style}>
      {text}
    </Link>
  );
};
