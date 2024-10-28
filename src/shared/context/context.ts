import { createContext } from "react";
type Props = {
  role: string | null;
  setRole: (value: string) => void;
  user_id: number;
  setUser: (value: number) => void;
};
export const AuthContext = createContext<Props>({
  role: "expert",
  setRole: () => {},
  user_id: 1,
  setUser: () => {},
});
