import { useState } from "react";
import { Stack, Link } from "@mui/material";
import { BaseLink } from "@/shared/ui";
import { useAuth } from "@/entities/auth";
import { Logout } from "@/features/logout";
import { HeaderView } from "@/shared/ui";
import { SERVICE } from "@/shared/lib/constants";
const style = {
  fontFamily: "system-ui",
  fontSize: "1.25rem",
  fontWeight: "400",
  lineHeight: "26.56px",
  color: "#2FB3FF",
  textDecorationLine: "none",
};

const HeaderContent = () => {
  const { isAuth } = useAuth();
  return (
    <Stack
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      alignItems="center"
      gap="2rem"
    >
      <Link sx={style} href={SERVICE.TEAM}>
        {" "}
        Сервис Управление Командами
      </Link>
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
export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderView open={open} setOpen={setOpen}>
      <HeaderContent />
    </HeaderView>
  );
};
