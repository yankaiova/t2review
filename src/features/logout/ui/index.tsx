import { Button } from "@mui/material";
import { useAuth } from "@/entities/auth";
export const Logout = () => {
  const { logOut } = useAuth();

  const handleClick = () => {
    logOut();
  };
  return (
    <Button sx={{ color: "#2FB3FF" }} onClick={handleClick}>
      Выйти
    </Button>
  );
};
