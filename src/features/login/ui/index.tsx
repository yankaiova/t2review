import { TextField, FormControl } from "@mui/material";
import { BaseButton } from "@/shared/ui";
import { useContext, useState } from "react";
import { usersApi } from "@/entities/user";
import { AuthContext } from "@/shared/context";
import { useNavigate } from "react-router-dom";
import { style } from "./styles";

export const Login = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const [getAuthUser] = usersApi.useGetUserByNameMutation();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const onChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLastName(e.target.value);
  };

  const signIn = () => {
    setRole("client");
    setUser(23);
    navigate("/calendar");
    // getAuthUser({ firstName, lastName })
    //   .then((res) => {
    //     setUser(res.data.user_id);
    //     setRole(res.data.role);
    //   })
    //   .then(() => navigate("/calendar"));
  };
  return (
    <FormControl sx={style}>
      <TextField
        id="outlined-firstname"
        placeholder="Имя"
        value={firstName}
        onChange={onChangeName}
      />
      <TextField
        id="outlined-lastname"
        placeholder="Фамилия"
        value={lastName}
        onChange={onChangeLastName}
      />
      <BaseButton text="Войти" onClick={signIn} />
    </FormControl>
  );
};
