import { AuthContext } from "../../../shared/context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import { BaseButton, BaseLink } from "../../../shared/ui";
import iconLogo from "../../../assets/Т1 Интеграция 1 1.svg";

export const Header = () => {
  const style = {
    margin: "20px 5rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const { user_id, role, setRole } = useContext(AuthContext);

  const ContentForAuthUser = () => {
    if (role === "expert") {
      return <BaseLink text="Мне нужная помощь" path="#" />;
    }
    return <BaseLink text="Хочу помогать" path="#" />;
  };

  return (
    <Box sx={style}>
      <Stack direction="row" alignItems="center" gap="3rem">
        <Link to="/">
          <img src={iconLogo} alt="" />
        </Link>
        <BaseLink text="Сервисы T1" path="#" />
        {user_id ? (
          <>
            <BaseLink text="Хочу помогать" path="#" />
            <BaseLink text="Мне нужна помощь" path="#" />
          </>
        ) : (
          <>
            <ContentForAuthUser />
            <BaseLink text="Календарь" path={"/calendar"} />
          </>
        )}
      </Stack>
      <BaseButton text="Профиль" />
    </Box>
  );
};
