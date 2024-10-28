import { useNavigate, useLocation } from "react-router-dom";

export const useRecord = ({ slot }: any) => {
  const navigate = useNavigate();
  function handleClick() {
    if (!!useLocation().pathname.match(/reschudale/)) {
      console.log("reshudale");
    } else {
      navigate("/meeting/create");
    }
  }
  return { handleClick };
};
