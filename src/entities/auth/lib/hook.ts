import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getAuthUser } from "../model/selectors";
import { login, logout } from "../model/slice";
//import { authApi } from "..";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getAuthUser);
  const isAuth = !!currentUser;
  // const [authUser] = authApi.useAuthUserMutation();

  const logIn = (user: string, password: string): void => {
    //const data = authUser({ user, password })
    // .then((res) => {
    console.log(user, password);
    localStorage.setItem("token", "765");
    dispatch(login(23));
    //})
    // .catch(() => {
    //   alert("Ошибка авторизации");
    // });
  };
  const logOut = (): void => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return { logIn, logOut, isAuth, currentUser };
};
