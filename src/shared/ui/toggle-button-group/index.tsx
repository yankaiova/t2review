import { Stack, Button } from "@mui/material";
import { style, styleDisabled, styleFlex } from "./styles";

export const CustomToggleGroup = ({
  values,
  currentValue,
  setCurrentValue,
}: {
  values: number[];
  currentValue: number;
  setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onChange = (value: number) => {
    setCurrentValue(value);
  };
  return (
    <Stack sx={styleFlex}>
      {values.map((value: number) => (
        <Button
          disabled={value === currentValue}
          key={value}
          sx={value === currentValue ? styleDisabled : style}
          onClick={() => onChange(value)}
        >
          {value}
        </Button>
      ))}
    </Stack>
  );
};
