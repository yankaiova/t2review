import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context";

type props = { children: React.ReactNode };

export const PrivateRoute = ({ children }: props) => {
  const { user_id } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id) {
      navigate("/");
    }
  }, [user_id, navigate]);

  if (user_id) return <>{children}</>;
};
