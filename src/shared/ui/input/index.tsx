import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { InputAdornment, TextField } from "@mui/material";
import { TFormikFieldProps } from "types/types";

type TFormValues = {
  value: string | null;
};

type TProps = TFormValues & TFormikFieldProps;

export const InputEmail = ({
  value,
  error,
  touched,
  handleBlur,
  handleChange,
}: TProps) => {
  return (
    <TextField
      id="email"
      name="email"
      InputLabelProps={{ shrink: true }}
      type="email"
      required
      placeholder="email@example.com"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched && Boolean(error)}
      helperText={touched && error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {touched && error && <WarningAmberIcon color="error" />}
          </InputAdornment>
        ),
      }}
    />
  );
};
