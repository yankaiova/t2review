import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { Button, TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
//import { User } from "../model/types";

type Props = {
  nameInput: string;
  id: string;
  type: string;
  schema: ObjectSchema<any>;
  onSubmit: (data: any) => void;
  eventSubmit: string;
};

export const InputForm = ({
  onSubmit,
  schema,
  eventSubmit,
  nameInput,
  id,
  type,
}: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id={id}
          type={type}
          variant="outlined"
          {...register(nameInput)}
        />
      </div>
      <ErrorMessage errors={errors} name={nameInput} />
      <Button type="submit">{eventSubmit}</Button>
    </form>
  );
};
