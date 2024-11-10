import { useAuth } from "@/entities/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type props = { children: React.ReactNode };

export const PrivateRoute = ({ children }: props) => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  if (isAuth) return <>{children}</>;
};
