import { BaseButton } from "@/shared/ui";
import { useContext } from "react";
import { AuthContext } from "@/shared/context";

export const Logout = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const handleClick = () => {
    setRole("");
    setUser(null);
  };
  return <BaseButton text="Выйти" onClick={handleClick} />;
};
