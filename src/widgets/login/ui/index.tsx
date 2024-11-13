import { TextField, FormControl } from "@mui/material";
import { BaseButton } from "@/shared/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { style } from "./styles";
import { useAppDispatch } from "@/shared/lib/hooks";
import { login } from "@/entities/auth/model/slice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = () => {
    dispatch(login(23));
    navigate("/calendar");
  };
  return (
    <FormControl sx={style}>
      <TextField
        id="outlined-user"
        placeholder="Введите логин"
        value={user}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setUser(e.target.value)}
      />
      <TextField
        id="outlined-password"
        type="password"
        value={password}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setPassword(e.target.value)}
      />
      <BaseButton text="Войти" onClick={signIn} />
    </FormControl>
  );
};
