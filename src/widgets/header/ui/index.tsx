import { AuthContext } from "@/shared/context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import { BaseButton, BaseLink } from "@/shared/ui";
import { style } from "./styles";
import iconLogo from "@/assets/Т1 Интеграция 1 1.svg";
import { Logout } from "@/features/logout";

export const Header = () => {
  const { user_id, role } = useContext(AuthContext);

  return (
    <Box sx={style}>
      <Stack direction="row" alignItems="center" gap="3rem">
        <Link to="/">
          <img src={iconLogo} alt="" />
        </Link>
        <BaseLink text="Сервисы T1" path="#" />
        {role === "client" && (
          <BaseLink text="Мне нужна помощь" path={"/search"} />
        )}
        {!!user_id && (
          <>
            <BaseLink text="Календарь" path={"/calendar"} />
            <Logout />
          </>
        )}
      </Stack>
      <BaseButton text="Профиль" />
    </Box>
  );
};
