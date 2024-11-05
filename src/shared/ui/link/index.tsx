import { Link } from "react-router-dom";
import { style } from "./index.style";
type PropsBaseLink = {
  path: string;
  text: string;
};
export const BaseLink = ({ path, text }: PropsBaseLink) => {
  return (
    <Link to={path} key={path} style={style}>
      {text}
    </Link>
  );
};
