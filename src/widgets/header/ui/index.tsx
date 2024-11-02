import { AuthContext } from "@/shared/context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import { BaseButton, BaseLink } from "@/shared/ui";
import { style } from "./styles";
import iconLogo from "@/assets/Т1 Интеграция 1 1.svg";

const LinkToAuthStartPage = ({ text }: { text: string }) => {
  return <BaseLink text={text} path="/calendar" />;
};
export const Header = () => {
  const { user_id, role, setRole } = useContext(AuthContext);

  return (
    <Box sx={style}>
      <Stack direction="row" alignItems="center" gap="3rem">
        <Link to="/">
          <img src={iconLogo} alt="" />
        </Link>
        <BaseLink text="Сервисы T1" path="#" />
        {!!user_id ? (
          <>
            <LinkToAuthStartPage text="Хочу помогать" />
            <LinkToAuthStartPage text="Мне нужна помощь" />
          </>
        ) : (
          <>
            <BaseButton
              text={role === "expert" ? "Хочу помогать" : "Мне нужна помощь"}
            />
            <BaseLink text="Календарь" path={"/calendar"} />
            {role === "client" && (
              <BaseLink text="Найти эксперта" path={"/search"} />
            )}
          </>
        )}
      </Stack>
      <BaseButton text="Профиль" />
    </Box>
  );
};
