import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getAuthUser } from "../model/selectors";
import { login, logout } from "../model/slice";
import { authApi } from "..";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getAuthUser);
  const isAuth = !!currentUser;
  const [authUser] = authApi.useAuthUserMutation();

  const logIn = (user: string, password: string) => {
    const data = authUser({ user, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.user_id));
      })
      .catch((error) => {
        alert("Ошибка авторизации");
      });
  };
  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return { logIn, logOut, isAuth };
};
