import { createContext } from "react";
type Props = {
  role: string;
  setRole: (value: string) => void;
  user_id?: number | null;
  setUser: (value: number | null) => void;
};
export const AuthContext = createContext<Props>({
  role: "",
  user_id: null,
  setRole: () => {},
  setUser: () => {},
});
