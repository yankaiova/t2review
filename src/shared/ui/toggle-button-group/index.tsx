import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import { MouseEvent } from "react";

import { iconStyle, rotateIcon, styleButton, styleGroup } from "./styles";

type ToggleOption = { value: string; order?: "asc" | "desc" };
type ToggleProps<T> = {
  items: T[];
  option: T;
  onChange: (value: T, id: number) => void;
};

export const ToggleButtons = <T extends ToggleOption>({
  items,
  option,
  onChange,
}: ToggleProps<T>) => {
  const handleChange = (
    _: MouseEvent<HTMLElement>,
    newValue: ToggleOption["value"] | null
  ) => {
    const clickedValue = newValue ?? option.value;
    const id = items.findIndex((el) => el.value === clickedValue);

    onChange(items[id], id);
  };

  return (
    <ToggleButtonGroup
      sx={styleGroup}
      value={option.value}
      onChange={handleChange}
      exclusive
    >
      {items.map(({ value, order }: T) => {
        return (
          <ToggleButton key={value} value={value} sx={styleButton}>
            {value}
            {order && (
              <ArrowDropDownIcon
                sx={[iconStyle, order === "asc" && rotateIcon]}
              />
            )}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
