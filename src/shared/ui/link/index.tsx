import { Link } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { style } from "./index.style";
type PropsBaseLink = {
  path: string;
  text: string;
};
export const BaseLink = ({ path, text }: PropsBaseLink) => {
  return (
    <RouteLink to={path}>
      {" "}
      <Link variant="body2" sx={style}>
        {text}
      </Link>
    </RouteLink>
  );
};
