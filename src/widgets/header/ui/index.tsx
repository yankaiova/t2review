import { useState } from "react";
import { Stack } from "@mui/material";
import { BaseLink } from "@/shared/ui";
import { useAuth } from "@/entities/auth";
import { Logout } from "@/features/logout";
import { HeaderView } from "@/shared/ui";

const HeaderContent = () => {
  const { isAuth } = useAuth();
  return (
    <Stack
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      alignItems="center"
      gap="2rem"
    >
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
export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderView open={open} setOpen={setOpen}>
      <HeaderContent />
    </HeaderView>
  );
};
