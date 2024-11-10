import { BaseButton } from "@/shared/ui";
import { useAuth } from "@/entities/auth";
export const Logout = () => {
  const { logOut } = useAuth();

  const handleClick = () => {
    logOut();
  };
  return <BaseButton text="Выйти" onClick={handleClick} />;
};
