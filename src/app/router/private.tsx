import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/shared/context";

type PropsPrivateRoute = { children: React.ReactNode };

export const PrivateRoute = ({ children }: PropsPrivateRoute): JSX.Element => {
  const { user_id } = useContext(AuthContext);
  return !!user_id ? <>{children}</> : <Navigate to={"/main"} replace />;
};
