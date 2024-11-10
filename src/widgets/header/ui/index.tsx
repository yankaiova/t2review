import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { BaseLink } from "@/shared/ui";
import { useAuth } from "@/entities/auth";
import iconLogo from "@/assets/Т1 Интеграция 1 1.svg";
import { Logout } from "@/features/logout";

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <Stack direction="row" alignItems="center" gap="3rem" margin={"20px 5rem"}>
      <Link to="/">
        <img src={iconLogo} alt="" />
      </Link>
      <BaseLink text="Сервисы T1" path="#" />
      {isAuth && (
        <>
          <BaseLink text="Мне нужна помощь" path={"/search"} />
          <BaseLink text="Календарь" path={"/calendar"} />
          <Logout />
        </>
      )}
    </Stack>
  );
};
